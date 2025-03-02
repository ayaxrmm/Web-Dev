import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../services/albums.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  photos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private router: Router
  ){}

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbumPhotos(id).subscribe(data => {
      this.photos = data;
    });
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
  
}
