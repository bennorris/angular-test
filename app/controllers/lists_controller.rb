class ListsController < ApplicationController

  def create
    @list = List.new
    @list.facebook = params[:facebook]
    @list.user_id = User.last.id
    @list.save
  end


  def show
    #get current user and show list
    @lists = Lists.all
    respond_to do |f|
      f.json {render json: @lists}
    end
  end

end
