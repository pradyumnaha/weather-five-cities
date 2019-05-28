//Model or Blueprint for the city object.
export class City{
    public cityName: string;
    public countryCd: string;
    public cityImg: string;

    constructor(city: string, country: string, img: string){
        this.cityName = city;
        this.countryCd = country;
        this.cityImg = img;
    }
}