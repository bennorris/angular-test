class UsersController < ApplicationController


  def index
    respond_to do |f|
      @users = User.all
      f.json { render json: @users}
    end
  end

  def create
    @user = User.new
    @user.name = params[:name]
    @user.facebook = params[:facebook]
    @user.save
  end


end
