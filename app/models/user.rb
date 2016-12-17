class User < ApplicationRecord
  validates_presence_of :name
  validates_uniqueness_of :facebook
  has_many :lists
  has_many :items, through: :lists
end
