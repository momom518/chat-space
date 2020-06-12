# README

# DB設計

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null:false|
|email|string|null:false,unique:true|
|password|string|null:false| 
### Association
- has_many:tweets
- has-many:users_groups
- has_many:groups through: :users_groups


## tweetsテーブル
|Column|Type|Options|
|------|----|-------|
|image|text||
|content|text||
|user_id|integer|null:false,foreign_key:true|
|group_id|integer|null:false'foreign_key:true|
### Association
- belongs_to:user
- belongs_to:group


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group|string|null:false,unique:true|
### Association
- has many:users_groups
- has_many:users through: :users_groups
- has_many:tweets 


## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null:false,foreign_key:true|
|group_id|integer|null:false,foreign_key:true|
### Association
- belongs_to:user
- belongs_to:group




This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
