require "rails"
require "footable-on-rails/version"

module FootableOnRails
  module Rails
    if ::Rails.version < "3.1"
      require "footable-on-rails/railtie"
    else
      require "footable-on-rails/engine"		
    end	
  end
end
