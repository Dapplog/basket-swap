import axios from 'axios';
import default_list from '../tokens/token_list_one.json';

const HarmonyAPI = () => {
  const list = {
    default_list,
    url: '',
    tokenList: {},
  };

  return {
    async getTokens(token_list_url) {
      const url =
        token_list_url &&
        `${
          token_list_url.endsWith('.eth')
            ? `${token_list_url}.link`
            : token_list_url
        }`;
      if (token_list_url && !list.url === token_list_url) {
        return await axios
          .get(url)
          .then((res) => (list.tokenList = res.tokenList));
      } else if (token_list_url && list.url === token_list_url) {
        return list.tokenList;
      } else {
        return list.default_list;
      }
    },
  };
};

export default HarmonyAPI;
