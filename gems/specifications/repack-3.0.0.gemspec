# -*- encoding: utf-8 -*-
# stub: repack 3.0.0 ruby lib

Gem::Specification.new do |s|
  s.name = "repack".freeze
  s.version = "3.0.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Dave Jungst".freeze, "Jake Sorce".freeze]
  s.date = "2017-04-10"
  s.description = "Production-tested, JavaScript-first tooling to use webpack within your Rails application".freeze
  s.email = ["dave@cottonwoodcoding.com".freeze, "jake@cottonwoodcoding.com".freeze]
  s.homepage = "https://github.com/cottonwoodcoding/repack".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.0.0".freeze)
  s.rubygems_version = "2.6.11".freeze
  s.summary = "Webpack / Rails / React".freeze

  s.installed_by_version = "2.6.11" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<rails>.freeze, ["> 4.0.0"])
      s.add_runtime_dependency(%q<json>.freeze, [">= 2.0.0"])
    else
      s.add_dependency(%q<rails>.freeze, ["> 4.0.0"])
      s.add_dependency(%q<json>.freeze, [">= 2.0.0"])
    end
  else
    s.add_dependency(%q<rails>.freeze, ["> 4.0.0"])
    s.add_dependency(%q<json>.freeze, [">= 2.0.0"])
  end
end
