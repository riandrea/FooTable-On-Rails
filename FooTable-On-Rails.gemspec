# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'footable-on-rails/version'

Gem::Specification.new do |spec|
  spec.name          = "footable-on-rails"
  spec.version       = FootableOnRails::Rails::VERSION
  spec.authors       = ["Rian Andrea"]
  spec.email         = ["rian.andrea@gmail.com"]
  spec.description   = %q{Integrates FooTable On Rails}
  spec.summary       = %q{Integrates FooTable On Rails}
  spec.homepage      = "https://github.com/riandrea/FooTable-On-Rails"
  spec.license       = "MIT"

  spec.files         = `git ls-files`.split($/)
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.3"
  spec.add_development_dependency "rake"
end
