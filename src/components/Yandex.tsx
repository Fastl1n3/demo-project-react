import {YMaps, Map} from "@pbe/react-yandex-maps";

function OpenYandex() {
    return (<YMaps>
        <div>
            My awesome application with maps!
            <Map defaultState={{ center: [54.843380, 83.089588], zoom: 12 }} />
        </div>
    </YMaps>);
}

export default OpenYandex;