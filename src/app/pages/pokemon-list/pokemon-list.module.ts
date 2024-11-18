import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonListPageRoutingModule } from './pokemon-list-routing.module';

import { PokemonListPage } from './pokemon-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonListPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PokemonListPage]
})
export class PokemonListPageModule {}
