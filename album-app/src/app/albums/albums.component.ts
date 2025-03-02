import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../services/albums.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums: any[] = [];
  constructor(private albumsService : AlbumsService){}

  ngOnInit(){
    this.albumsService.getAlbums().subscribe(data => {
      this.albums = data;
    });
  }

  deleteAlbum(id:number){
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }
}
