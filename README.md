# FooTable::On::Rails

## Installation

Add this line to your application's Gemfile:

    gem 'footable-on-rails'

And then execute:

    $ bundle install


## Usage

1. Add this line below before require_tree on 'application.css' file

    *= require footable-on-rails

2. Add this line after the above line to use the metro style

    *= require footable-on-rails/footable.metro.css

2. Add this line below before require_tree on 'application.js'

    //= require footable-on-rails

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
