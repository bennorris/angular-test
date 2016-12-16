class UsersController < ApplicationController


  def index

    respond_to do |f|
      @users = User.all
      f.json { render json: @users}
    end
  end

  def create
    ##create a user
  end


end
