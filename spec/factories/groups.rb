FactoryBot.define do
  factory :group do
    group {Faker::Team.name} #groupはカラム名に合わせる。
  end
end