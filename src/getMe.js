const fs = require('fs')
const SpotifyWebApi = require('spotify-web-api-node');
const token = 'BQB3Ytn1Ao1FNBibedVyXGso7i9xkrY4OJZOQkoKvMexsvHgER…KuHGY803qeCDxdft_iW56IioLKxrq0uDqgZ_X5e6icLvj9fcT';
const spotifyApi = new SpotifyWebApi();

spotifyApi.setAccessToken(token);

//get my profile data
function getMyData() {(
    async () => {
        const me = await spotifyApi.getMe();
        console.log(me.body);
    })().catch(e => {
        console.error(e);
    })
}

getMyData();