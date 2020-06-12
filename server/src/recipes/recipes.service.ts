import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Recipe } from '../database/schema'
import { RecipeType } from '../graphql/types'
import { NewRecipeInput } from './dto/new-recipe.input'
import { RecipesArgs } from './dto/recipes.args'
import { UpdateRecipeInput } from './dto/update-recipe.input'

@Injectable()
export class RecipesService {
  constructor(@InjectModel(Recipe.name) private recipeDbModel: Model<Recipe>) {}

  async create(newRecipeInput: NewRecipeInput): Promise<RecipeType> {
    return new this.recipeDbModel(newRecipeInput).save()
  }

  async update(updateRecipeInput: UpdateRecipeInput): Promise<RecipeType> {
    const id = updateRecipeInput._id
    return this.recipeDbModel.findByIdAndUpdate(id, updateRecipeInput)
  }

  async findOneById(id: string): Promise<RecipeType> {
    let recipe
    try {
      recipe = await this.recipeDbModel.findById(id)
    } catch (ExceptionsHandler) {
      throw new BadRequestException(`${id} is not a valid id.`)
    }
    if (!recipe) {
      throw new NotFoundException(`${id} is not found.`)
    }
    return recipe
  }

  async findAll(recipesArgs: RecipesArgs): Promise<RecipeType[]> {
    return this.recipeDbModel.find().setOptions({ ...recipesArgs })
  }

  async del(id: string): Promise<boolean> {
    const removeRecipe = await this.recipeDbModel.findByIdAndDelete(id)
    if (removeRecipe) return true
    return false
  }
}
