import Dashboard from "../views/Dashboard.js";
import Posts from "../views/Posts.js";
import Settings from "../views/Settings.js";
import PostView from "../views/PostView.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    console.log(Array.from(match.route.path.matchAll(/:(\w+)/g)));

    return {};

    // return Object.fromEntries(keys.map((key, i) =>{
    //     return [key, values[i]];
    // }));
}

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        {path: "/", view: Dashboard}, 
        {path: "/posts", view: Posts }, 
        {path: "/posts/:id", view: Posts }, 
        {path: "/settings", view: Settings }, 
    ];

    //test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path)),
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();

    console.log(view);
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});