const Cities =  require('./cities');
const distance_between = require('./distance');

function TSM_route_exs() {


    const City = (x, y) => {
        this.x = x;
        this.y = y;
    } 

    for(let i = 0 ; i < Cities.length; i++) {
        Cities[i] = new City();
    }
    return Cities;

    
}