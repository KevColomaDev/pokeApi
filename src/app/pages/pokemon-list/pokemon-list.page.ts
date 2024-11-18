import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokemonService } from 'src/app/services/pokemon.service';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})

export class PokemonListPage implements OnInit {

  pokemonImage = '';
  pokemonName = '';
  pokemonId = '';
  pokemonWeight = 0;

  pokemon: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pokemonService: PokemonService,
  ) { 
    this.pokemon = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }
  get name() {
    return this.pokemon.get('name');
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}
  async getPokemon() {
    try {
      const pokemonFormatted = this.pokemon?.value.name.toLowerCase().replace(/ /g, '-'); 
      const response = await firstValueFrom(this.pokemonService.getPokemon(pokemonFormatted));
      this.pokemonImage = (response as any).sprites.front_default;
      this.pokemonName = (response as any).name.toUpperCase();
      this.pokemonId = (response as any).id;
      this.pokemonWeight = (response as any).weight;
      return response;
    } catch (error) {
      this.pokemonName = 'Pokemon no encontrado';
      return error;
    }
    
  }
}
