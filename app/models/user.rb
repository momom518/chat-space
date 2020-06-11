class User < ApplicationRecord
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  # has_many:tweets
  has_many :user_groups 
  has_many :groups, through: :user_groups
  validates :name, presence: true, uniqueness:true
  

end
