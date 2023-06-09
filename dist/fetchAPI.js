var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function getEpisodes(page = "") {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`https://rickandmortyapi.com/api/episode${page}`);
        const episodes = yield res.json();
        return episodes;
    });
}
export function getEpisode(URL = "https://rickandmortyapi.com/api/episode", id = "") {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${URL}/${id}`);
        const episode = yield res.json();
        return episode;
    });
}
export function getCharacter(URL = "https://rickandmortyapi.com/api/character", id = "") {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${URL}/${id}`);
        const character = yield res.json();
        return character;
    });
}
export function getLocation(URL = "https://rickandmortyapi.com/api/location/") {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(URL);
        const location = yield res.json();
        return location;
    });
}
