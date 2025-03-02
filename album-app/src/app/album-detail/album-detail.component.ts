import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../services/albums.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  album:any = {};
  updatedTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private router: Router
  ){}
  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe(data => {
      this.album = data;
      this.updatedTitle = data.title;
    });
  }

  saveChanges(){
    this.album.title = this.updatedTitle;
    this.albumsService.updateAlbum(this.album.id, this.album).subscribe();
  }
  goBack() {
    this.router.navigate(['/albums']);
  }
}
