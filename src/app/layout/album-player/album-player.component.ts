import {Component, OnInit, Input} from '@angular/core';
import {MediaService} from "../../services/media.service";

@Component({
  selector: 'app-album-player',
  templateUrl: './album-player.component.html',
  styleUrls: ['./album-player.component.css']
})
export class AlbumPlayerComponent implements OnInit {

  @Input() album: any;
  @Input() songs: any[];

  song: any = null;
  trackNo: number = 0;
  player: any = {};
  playClass: boolean = false;

  constructor(private mediaService: MediaService) {
  }

  ngOnInit() {
    this.elements();
    if (this.songs.length > 0) {
      for (let i in this.songs) {
        this.mediaService.audio('?' + this.songs[i].path)
          .then(
            data => {
              this.songs[i].src = data;
              if (i === '0') this.begin();
            }
          );
      }
    }
  }

  elements() {
    this.player.track = document.getElementById('audio');
    this.player.playBtn = document.getElementById('play');
    this.player.backBtn = document.getElementById('prev');
    this.player.nextBtn = document.getElementById('next');
    this.player.currentDuration = document.getElementById('current_time_display');
    this.player.bar = document.getElementById('progress_box');
    this.player.updateTime = 0;
    this.player.progressBar = document.getElementById('play_progress');
    this.player.progressBuffer = document.getElementById("load_progress");
    this.song = this.songs[this.trackNo];
  }

  begin() {
    this.song.src = 'http://nhachoa.keeng.vn/sas_01/songv3/NamViet0710/Vi_Anh_La_Gio_Edm_Ver.mp3?s=WEB&ot=song&oid=2407862&rt=p';
    this.player.track.src = this.song.src;
    this.player.updateTime = setInterval(() => this.updateTrack(), 1000);
  }

  pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
  };
  setProgressBar() {
    let size = this.player.track.currentTime * 100 / this.player.track.duration;
    this.player.progressBar.style.width = Math.round(size) + "%";
    let sizePx = this.player.track.currentTime * this.player.barSize / this.player.track.duration;
    this.player.progressBar.style.width = Math.round(sizePx) + "px";
    let playedMinutes = this.pad(Math.round(this.player.track.currentTime / 60));
    let playedSeconds = this.pad(Math.round(this.player.track.currentTime % 60));
    this.player.currentDuration.innerHTML = playedMinutes + ':' + playedSeconds;
  }
  endProgressBar() {
    this.player.currentDuration.innerHTML = '00.00';
    this.player.progressBar.style.width = '0px';
    window.clearInterval(this.player.updateTime);
  }
  updateTrack() {
    this.player.barSize = this.player.bar.offsetWidth;
    this.player.barSize = this.player.bar.offsetWidth;
    if (this.player.track !== undefined && !this.player.track.ended) {
      this.setProgressBar();
    } else {
      this.endProgressBar();
    }
    if (document.getElementById('audio') === null) {
      window.clearInterval(this.player.updateTime);
    }
  };

  updateLoading() {
    let percentLoad;
    if ((this.player.track.buffered != undefined) && (this.player.track.buffered.length != 0)) {
      percentLoad = (this.player.track.buffered.end(this.player.track.buffered.length - 1) * this.player.barSize) / this.player.track.duration;
      this.player.progressBuffer.style.width = percentLoad + "px";
    }
  }

  changeBar(e: any) {
    if (!this.player.track.ended) {
      let mouseX = e.pageX - this.player.bar.offsetLeft;
      this.player.track.currentTime = mouseX * this.player.track.duration / this.player.barSize;
      this.player.progressBar.style.width = mouseX + 'px';
    }
  }

  togglePlay() {
    if (this.player.track.paused === true) {
      this.player.track.play();
      this.playClass = false;
      this.player.updateTime = setInterval(() => this.updateTrack(), 1000);
    } else {
      this.player.track.pause();
      this.playClass = true;
      window.clearInterval(this.player.updateTime);
    }
  }

  backTrack() {
    if (this.trackNo > 0) {
      this.trackNo--;
      this.song = this.songs[this.trackNo];
      this.player.track.src = this.song.src;
    }
  }

  nextTrack() {
    if (this.trackNo < this.songs.length - 1) {
      this.trackNo++;
    } else {
      this.trackNo = 0;
    }
    this.song = this.songs[this.trackNo];
    this.player.track.src = this.song.src;
  }

  changeSong(event: any) {
    this.song = event;
    this.player.track.src = this.song.src;
  }

  destruct() {
    this.player = {};
    this.song = null;
  }

}
