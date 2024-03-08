import { Autocomplete, CircularProgress, ListItem, ListItemText, TextField } from '@mui/material';
import FlexXBox from '../common/FlexXBox';
import { Search } from '@mui/icons-material';
import useAxios from 'axios-hooks';
import { SearchedCity } from '../../types/weather-api.types';
import { useEffect, useMemo, useState } from 'react';
import { debounce } from '@mui/material/utils'
import HometownToggleButton from '../common/HometownToggleButton';
import FavoriteToggleButton from '../common/FavoriteToggleButton';

interface SearchBoxProps {
  onCitySelect: (city: SearchedCity) => void;
}

function SearchBox({
  onCitySelect,
}: SearchBoxProps) {
  const [query, setQuery] = useState('');
  const [{ data, loading, error }, refetch] = useAxios<SearchedCity[]>(
    {
      url:'https://api.weatherapi.com/v1/search.json',
      params: {
        key: import.meta.env.VITE_WEATHER_API_KEY,
        q: query,
      },
    },
    { manual: true },
  );

  const debouncedRefetch = useMemo(() => debounce(() => {
    if (query && query.length > 2) {
      refetch();
    }
  }, 500), [query, refetch]);
  
  useEffect(() => {
    debouncedRefetch();
  }, [query, debouncedRefetch]);

  return (
    <FlexXBox>
      <Autocomplete<SearchedCity>
        fullWidth
        onChange={(_, value) => {
          if (value) {
            onCitySelect(value)
          }
        }}
        onInputChange={(_, value) => setQuery(value)}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        getOptionLabel={(city) => `${city.name}, ${city.region}, ${city.country}`}
        getOptionKey={(city) => city.id}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Search for a city'
            helperText={error ? 'Error fetching cities' : ''}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? <CircularProgress color='inherit' size={20} /> : <Search />}
                </>
              ),
            }}
          />
        )}
        options={data || []}
        filterOptions={(cities) => cities}
        renderOption={(props, city) => {
          return (
            <ListItem key={city.id} {...props}>
              <ListItemText
                primary={city.name}
                secondary={`${city.region}, ${city.country}`}
              />
              <FlexXBox flexGrow={1} />
              <HometownToggleButton cityName={city.name} />
              <FavoriteToggleButton cityName={city.name} />
            </ListItem>
          );
        
        }}
      />
    </FlexXBox>
  );
}

export default SearchBox;
