class ItemSerializer < ActiveModel::Serializer
  attributes :id, :content, :artist, :medium, :img
  belongs_to :list
end
