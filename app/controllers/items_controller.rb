class ItemsController < ApplicationController

  def create
    @list = List.find_by(facebook: params[:facebook])
    @item = @list.items.build
    @item.user_id = @list.user_id
    @item.content = params[:content]
    @item.artist = params[:artist]
    @item.img = params[:img]
    @item.medium = params[:medium]
    @item.save
  end

  def delete
    @list = List.find_by(facebook: params[:facebook])
    @item = @list.items.select {|i| i.artist == params[:artist] && i.content == params[:album] }
    Item.delete(@item)
  end

end
