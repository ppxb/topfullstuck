import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { PubSub } from 'apollo-server-express'
import { RecipeType } from '../graphql/types'
import { NewRecipeInput } from './dto/new-recipe.input'
import { RecipesArgs } from './dto/recipes.args'
import { UpdateRecipeInput } from './dto/update-recipe.input'
import { RecipesService } from './recipes.service'

const pubSub = new PubSub()

@Resolver(of => RecipeType)
export class RecipesResolver {
  constructor(private readonly recipesService: RecipesService) {}

  @Query(returns => RecipeType)
  async recipe(@Args('id') id: string): Promise<RecipeType> {
    return await this.recipesService.findOneById(id)
  }

  @Query(returns => [RecipeType])
  async recipes(@Args() recipesArgs: RecipesArgs): Promise<RecipeType[]> {
    return await this.recipesService.findAll(recipesArgs)
  }

  @Mutation(returns => RecipeType)
  async addRecipe(
    @Args('newRecipeInput') newRecipeInput: NewRecipeInput
  ): Promise<RecipeType> {
    const recipe = await this.recipesService.create(newRecipeInput)
    pubSub.publish('recipeAdd', { recipeAdd: recipe })
    return recipe
  }

  @Mutation(returns => RecipeType)
  async updateRecipe(
    @Args('updateRecipeInput') updateRecipeInput: UpdateRecipeInput
  ): Promise<RecipeType> {
    const recipe = await this.recipesService.update(updateRecipeInput)
    return recipe
  }

  @Mutation(returns => Boolean)
  async delRecipe(@Args('id') id: string) {
    return await this.recipesService.del(id)
  }

  @Subscription(returns => RecipeType)
  recipeAdd() {
    return pubSub.asyncIterator('recipeAdd')
  }
}
