class ItemsController < ApplicationController

  def create
    @list = List.find_by(facebook: params[:facebook])
    @item = @list.items.build
    @item.user_id = @list.user_id
    @item.content = params[:content]
    @item.artist = params[:artist]
    @item.img = params[:img]
    @item.save
  end

  def delete
    binding.pry 

  end

end
