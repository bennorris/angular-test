class ListsController < ApplicationController

  def create
    @list = List.new
    @list.facebook = params[:facebook]
    @list.user_id = User.last.id
    @list.save
  end


  def show
    @list = List.find_by(facebook: params[:id])

    respond_to do |f|
      f.json {render json: @list}
    end
  end

end
