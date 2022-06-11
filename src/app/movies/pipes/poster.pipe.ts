import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'poster'
})
export class PosterPipe implements PipeTransform {
    transform( item: any ) {
        return `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`;
    }
}