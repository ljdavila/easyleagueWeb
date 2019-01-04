import { TimeService } from './../../services/time/time.service';
import { UsersService } from './../../services/users/users.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { slideInOutAnimation } from '../../animations/slideIn-slideOut';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { TeamsService } from '../../services';

@Component({
    selector: 'app-sideform',
    templateUrl: './sideform.component.html',
    styleUrls: ['sideform.component.scss'],
    animations: [slideInOutAnimation],
    host: { '[@slideInOutAnimation]': '' }
})
export class SideFormComponent implements OnInit {
    teamForm: FormGroup;
    imagePath;
    imgURL: any;
    message: string;
    searchedPlayers = [];
    addedPlayers = [];
    selectedSport = 'Select a sport';
    encodedImage: string;
    sports = ['None', 'basketball'];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UsersService,
        private teamService: TeamsService,
        private timeService: TimeService,
        private fb: FormBuilder) { }

    ngOnInit() {
        this.teamForm = this.fb.group({
            name: [''],
            city: [''],
            country: [''],
            logo: ['']
        });
    }

    closeSideForm() {
        this.router.navigate([{ outlets: { sideform: null } }]);
    }

    onFileChanged(event) {
        const file = event.target.files[0];
    }

    preview(files) {
        if (files.length === 0) {
            return;
        }

        const mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = 'Only images are supported.';
            return;
        }

        const reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.imgURL = reader.result;
            this.encodedImage = this.imgURL;
        };
    }

    removePreview() {
        this.imgURL = '';
    }

    searchPlayers(searched: string) {
        console.log(searched);
        this.userService.getUsersByName(searched).subscribe(players => {
            this.searchedPlayers = players;
        }, error => {
            console.log('error');
            console.log(error);
        });
    }

    addPlayer(value, position) {
        console.log('adding player');
        console.log(value);

        const player = this.searchedPlayers.find((user) => user.name.toLowerCase() === value.toLowerCase());
        const result = {
            id: player.id,
            name: player.name,
            position: position,
            image:  player.image,
        };
        console.log(result);
        this.addedPlayers.push(result);
        console.log(this.addedPlayers);
        this.searchedPlayers = [];
    }

    createTeam(data) {
        data.value.logo = btoa(this.encodedImage) || '';
        data.value.rank = -1;
        data.value.sport = this.selectedSport;
        data.value.players = this.addedPlayers;
        data.value.created = this.timeService.convertToTimestamp(this.timeService.getTime());
        data.value.coach_id = 'user-davi';

        console.log(data.value);
        this.teamService.createTeam(data.value).subscribe(response => {
            console.log(response);
        });
    }

    selectSport(index: number) {
        this.selectedSport = this.sports[index];
        console.log(this.selectedSport);
    }
}

