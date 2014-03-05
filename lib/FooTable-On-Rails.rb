require "rails"
require "FooTable-On-Rails/version"

module FooTableOnRails
  module Rails
    if ::Rails.version < "3.1"
      require "FooTable-On-Rails/railtie"
    else
      require "FooTable-On-Rails/engine"		
    end	
  end
end
