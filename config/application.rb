require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module ChatSpace
  class Application < Rails::Application
    # config.i18n.default_locale = :ja
    config.load_defaults 6.0
    # config.i18n.default_locale = :ja
    config.generators do |g|
    # config.i18n.default_locale = :ja
      g.stylesheets false
      g.javascripts false
      g.helper false
      g.test_framework false
      
    end 
    config.i18n.default_locale = :ja
  end
end
