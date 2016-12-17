class ItemSerializer < ActiveModel::Serializer
  attributes :id, :content, :artist, :type, :img
  belongs_to :list
end
