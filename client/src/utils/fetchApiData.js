import PropType from 'prop-types';

const fetchApiData = async (url, { body, ...settings }, dispatch) => {
  const headers = { 'Content-Type': 'application/json' };
  const config = {
    method: body ? 'POST' : 'GET',
    ...settings,
    headers: {
      ...headers,
      ...settings.headers,
    },
  };

  if (body) config.body = JSON.stringify(body);

  const response = await fetch(`/${url}`, config);
  const data = await response.json();
  if (response.ok) dispatch(data);
  else dispatch([]);
};

fetchApiData.PropType = {
  url: PropType.string.isRequired,
  dispatch: PropType.func.isRequired,
};

export default fetchApiData;
