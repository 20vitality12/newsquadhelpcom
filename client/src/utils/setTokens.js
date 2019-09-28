import { ACCESS_TOKEN, REFRESH_TOKEN} from '../constants/constants'

function setTokens(data) {
    const { accessToken, refreshToken } = data;
    localStorage.setItem(ACCESS_TOKEN, accessToken);
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
    console.log(accessToken, refreshToken);
}

export { setTokens }