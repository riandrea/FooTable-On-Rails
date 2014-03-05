




<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>FooTable/js/footable.paginate.js at V2 · bradvin/FooTable · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="bradvin/FooTable" name="twitter:title" /><meta content="FooTable - jQuery plugin to make HTML tables responsive" name="twitter:description" /><meta content="https://0.gravatar.com/avatar/87df524abcdbb0207a58e6a441bf489e?d=https%3A%2F%2Fidenticons.github.com%2F3a118f49443234b1a9012269edd1054d.png&amp;r=x&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://0.gravatar.com/avatar/87df524abcdbb0207a58e6a441bf489e?d=https%3A%2F%2Fidenticons.github.com%2F3a118f49443234b1a9012269edd1054d.png&amp;r=x&amp;s=400" property="og:image" /><meta content="bradvin/FooTable" property="og:title" /><meta content="https://github.com/bradvin/FooTable" property="og:url" /><meta content="FooTable - jQuery plugin to make HTML tables responsive" property="og:description" />

    <meta name="hostname" content="github-fe132-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 2.1.0p0-github-tcmalloc (87c9373a41) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="8BC091D4:3CFA:DC6CF8:5316C3E6" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="DalozxMAV4ZYPLbPYsTU87AeaM5qfNwqa+47HqUmR1I=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-144f6fbd93cc11df8cc03bc000351f75fa1e5875.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-ff993fcf465373a314708ecedfbbffc29250b930.css" media="all" rel="stylesheet" type="text/css" />
    
    


      <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-490867a148cf94468c141093ccd4e56ed2144eb9.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-a74d8739a439667125da3a5c5435962d57986a54.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="348cbaf0429fd819da9310a1f5148dfb">

        <link data-pjax-transient rel='permalink' href='/bradvin/FooTable/blob/8cc05102f0c05ab93400573848043dd0ed240512/js/footable.paginate.js'>

  <meta name="description" content="FooTable - jQuery plugin to make HTML tables responsive" />

  <meta content="1409490" name="octolytics-dimension-user_id" /><meta content="bradvin" name="octolytics-dimension-user_login" /><meta content="6710201" name="octolytics-dimension-repository_id" /><meta content="bradvin/FooTable" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="6710201" name="octolytics-dimension-repository_network_root_id" /><meta content="bradvin/FooTable" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/bradvin/FooTable/commits/V2.atom" rel="alternate" title="Recent Commits to FooTable:V2" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production  vis-public page-blob tipsy-tooltips">
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fbradvin%2FFooTable%2Fblob%2FV2%2Fjs%2Ffootable.paginate.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="bradvin/FooTable"
      data-branch="V2"
      data-sha="0e5fa39f02fb929b298d31b86dbc3a59609ec401"
  >

    <input type="hidden" name="nwo" value="bradvin/FooTable" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
    <a href="/login?return_to=%2Fbradvin%2FFooTable"
    class="minibutton with-count js-toggler-target star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to use this feature" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/bradvin/FooTable/stargazers">
      863
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fbradvin%2FFooTable"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/bradvin/FooTable/network" class="social-count">
        209
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/bradvin" class="url fn" itemprop="url" rel="author"><span itemprop="title">bradvin</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/bradvin/FooTable" class="js-current-repository js-repo-home-link">FooTable</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/bradvin/FooTable" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /bradvin/FooTable">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/bradvin/FooTable/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /bradvin/FooTable/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>76</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/bradvin/FooTable/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /bradvin/FooTable/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/bradvin/FooTable/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /bradvin/FooTable/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/bradvin/FooTable/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /bradvin/FooTable/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/bradvin/FooTable/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /bradvin/FooTable/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/bradvin/FooTable.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/bradvin/FooTable.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/bradvin/FooTable" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/bradvin/FooTable" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>



                <a href="/bradvin/FooTable/archive/V2.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:690207566657a0bd7d9c0a424a72414f -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/bradvin/FooTable/find/V2" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="V2"
    data-ref="V2"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">V2</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/bradvin/FooTable/blob/V2/js/footable.paginate.js"
                 data-name="V2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="V2">V2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/bradvin/FooTable/blob/bs3/js/footable.paginate.js"
                 data-name="bs3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="bs3">bs3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/bradvin/FooTable/blob/develop/js/footable.paginate.js"
                 data-name="develop"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="develop">develop</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/bradvin/FooTable/blob/gh-pages/js/footable.paginate.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/bradvin/FooTable/blob/master/js/footable.paginate.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/bradvin/FooTable/blob/testing/js/footable.paginate.js"
                 data-name="testing"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="testing">testing</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/bradvin/FooTable/tree/V2.0.1.4/js/footable.paginate.js"
                 data-name="V2.0.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="V2.0.1.4">V2.0.1.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/bradvin/FooTable/tree/V2.0.1.3/js/footable.paginate.js"
                 data-name="V2.0.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="V2.0.1.3">V2.0.1.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/bradvin/FooTable/tree/2.0.1/js/footable.paginate.js"
                 data-name="2.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="2.0.1">2.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/bradvin/FooTable/tree/2.0.0/js/footable.paginate.js"
                 data-name="2.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="2.0.0">2.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/bradvin/FooTable/tree/0.5.0/js/footable.paginate.js"
                 data-name="0.5.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.0">0.5.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/bradvin/FooTable/tree/0.1.0/js/footable.paginate.js"
                 data-name="0.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.1.0">0.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/bradvin/FooTable/tree/0.1/js/footable.paginate.js"
                 data-name="0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.1">0.1</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/bradvin/FooTable" data-branch="V2" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">FooTable</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/bradvin/FooTable/tree/V2/js" data-branch="V2" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><strong class="final-path">footable.paginate.js</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="js/footable.paginate.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img alt="bradvin" class="main-avatar js-avatar" data-user="1409490" height="24" src="https://0.gravatar.com/avatar/87df524abcdbb0207a58e6a441bf489e?d=https%3A%2F%2Fidenticons.github.com%2F3a118f49443234b1a9012269edd1054d.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><a href="/bradvin" rel="author">bradvin</a></span>
    <time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2014-02-16T00:12:10-08:00" title="2014-02-16 00:12:10">February 16, 2014</time>
    <div class="commit-title">
        <a href="/bradvin/FooTable/commit/7e1ca13e96630ad593f5489e8c6a39105724717b" class="message" data-pjax="true" title="fixed paging bug where page state lost">fixed paging bug where page state lost</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>5</strong> contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="bradvin" href="/bradvin/FooTable/commits/V2/js/footable.paginate.js?author=bradvin"><img alt="bradvin" class=" js-avatar" data-user="1409490" height="20" src="https://0.gravatar.com/avatar/87df524abcdbb0207a58e6a441bf489e?d=https%3A%2F%2Fidenticons.github.com%2F3a118f49443234b1a9012269edd1054d.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="steveush" href="/bradvin/FooTable/commits/V2/js/footable.paginate.js?author=steveush"><img alt="steveush" class=" js-avatar" data-user="1692151" height="20" src="https://0.gravatar.com/avatar/f7f8da60b7b23a14d802ae7ab130dc31?d=https%3A%2F%2Fidenticons.github.com%2F3f6baf1837c1731cde0912adc1748a00.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="seriema" href="/bradvin/FooTable/commits/V2/js/footable.paginate.js?author=seriema"><img alt="John-Philip Johansson" class=" js-avatar" data-user="693684" height="20" src="https://2.gravatar.com/avatar/00c81c91913dd04245ba5639a7324ee4?d=https%3A%2F%2Fidenticons.github.com%2Fcea9cffda7804d56dd1aa839d852bb74.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="awc737" href="/bradvin/FooTable/commits/V2/js/footable.paginate.js?author=awc737"><img alt="awc737" class=" js-avatar" data-user="2092199" height="20" src="https://0.gravatar.com/avatar/76308be456a38a3fbd6cdc8a303065fa?d=https%3A%2F%2Fidenticons.github.com%2F4468e3438e2982fd5b2dafeb3bc2ac19.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="dboune" href="/bradvin/FooTable/commits/V2/js/footable.paginate.js?author=dboune"><img alt="Damian Bouné" class=" js-avatar" data-user="68863" height="20" src="https://1.gravatar.com/avatar/54e9cb400ff56b802130db5a20c4d673?d=https%3A%2F%2Fidenticons.github.com%2F1fa9024b5a795aa4eabc7abbd9bce7e9.png&amp;r=x&amp;s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="bradvin" class=" js-avatar" data-user="1409490" height="24" src="https://0.gravatar.com/avatar/87df524abcdbb0207a58e6a441bf489e?d=https%3A%2F%2Fidenticons.github.com%2F3a118f49443234b1a9012269edd1054d.png&amp;r=x&amp;s=140" width="24" />
            <a href="/bradvin">bradvin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="steveush" class=" js-avatar" data-user="1692151" height="24" src="https://0.gravatar.com/avatar/f7f8da60b7b23a14d802ae7ab130dc31?d=https%3A%2F%2Fidenticons.github.com%2F3f6baf1837c1731cde0912adc1748a00.png&amp;r=x&amp;s=140" width="24" />
            <a href="/steveush">steveush</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="John-Philip Johansson" class=" js-avatar" data-user="693684" height="24" src="https://2.gravatar.com/avatar/00c81c91913dd04245ba5639a7324ee4?d=https%3A%2F%2Fidenticons.github.com%2Fcea9cffda7804d56dd1aa839d852bb74.png&amp;r=x&amp;s=140" width="24" />
            <a href="/seriema">seriema</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="awc737" class=" js-avatar" data-user="2092199" height="24" src="https://0.gravatar.com/avatar/76308be456a38a3fbd6cdc8a303065fa?d=https%3A%2F%2Fidenticons.github.com%2F4468e3438e2982fd5b2dafeb3bc2ac19.png&amp;r=x&amp;s=140" width="24" />
            <a href="/awc737">awc737</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Damian Bouné" class=" js-avatar" data-user="68863" height="24" src="https://1.gravatar.com/avatar/54e9cb400ff56b802130db5a20c4d673?d=https%3A%2F%2Fidenticons.github.com%2F1fa9024b5a795aa4eabc7abbd9bce7e9.png&amp;r=x&amp;s=140" width="24" />
            <a href="/dboune">dboune</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>241 lines (223 sloc)</span>
          <span class="meta-divider"></span>
        <span>9.065 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
              <a class="minibutton disabled tooltipped tooltipped-w" href="#"
                 aria-label="You must be signed in to make or propose changes">Edit</a>
          <a href="/bradvin/FooTable/raw/V2/js/footable.paginate.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/bradvin/FooTable/blame/V2/js/footable.paginate.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/bradvin/FooTable/commits/V2/js/footable.paginate.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">$</span><span class="p">,</span> <span class="nx">w</span><span class="p">,</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2'>	<span class="k">if</span> <span class="p">(</span><span class="nx">w</span><span class="p">.</span><span class="nx">footable</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="o">||</span> <span class="nx">w</span><span class="p">.</span><span class="nx">footable</span> <span class="o">===</span> <span class="kc">null</span><span class="p">)</span></div><div class='line' id='LC3'>		<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Please check and make sure footable.js is included in the page and is loaded prior to this script.&#39;</span><span class="p">);</span></div><div class='line' id='LC4'><br/></div><div class='line' id='LC5'>	<span class="kd">var</span> <span class="nx">defaults</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC6'>		<span class="nx">paginate</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC7'>		<span class="nx">pageSize</span><span class="o">:</span> <span class="mi">10</span><span class="p">,</span></div><div class='line' id='LC8'>		<span class="nx">pageNavigation</span><span class="o">:</span> <span class="s1">&#39;.pagination&#39;</span><span class="p">,</span></div><div class='line' id='LC9'>		<span class="nx">firstText</span><span class="o">:</span> <span class="s1">&#39;&amp;laquo;&#39;</span><span class="p">,</span></div><div class='line' id='LC10'>		<span class="nx">previousText</span><span class="o">:</span> <span class="s1">&#39;&amp;lsaquo;&#39;</span><span class="p">,</span></div><div class='line' id='LC11'>		<span class="nx">nextText</span><span class="o">:</span> <span class="s1">&#39;&amp;rsaquo;&#39;</span><span class="p">,</span></div><div class='line' id='LC12'>		<span class="nx">lastText</span><span class="o">:</span> <span class="s1">&#39;&amp;raquo;&#39;</span><span class="p">,</span></div><div class='line' id='LC13'>		<span class="nx">limitNavigation</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC14'>		<span class="nx">limitPreviousText</span><span class="o">:</span> <span class="s1">&#39;...&#39;</span><span class="p">,</span></div><div class='line' id='LC15'>		<span class="nx">limitNextText</span><span class="o">:</span> <span class="s1">&#39;...&#39;</span></div><div class='line' id='LC16'>	<span class="p">};</span></div><div class='line' id='LC17'><br/></div><div class='line' id='LC18'>	<span class="kd">function</span> <span class="nx">pageInfo</span><span class="p">(</span><span class="nx">ft</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC19'>		<span class="kd">var</span> <span class="nx">$table</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">ft</span><span class="p">.</span><span class="nx">table</span><span class="p">),</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">$table</span><span class="p">.</span><span class="nx">data</span><span class="p">();</span></div><div class='line' id='LC20'>		<span class="k">this</span><span class="p">.</span><span class="nx">pageNavigation</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">pageNavigation</span> <span class="o">||</span> <span class="nx">ft</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">pageNavigation</span><span class="p">;</span></div><div class='line' id='LC21'>		<span class="k">this</span><span class="p">.</span><span class="nx">pageSize</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">pageSize</span> <span class="o">||</span> <span class="nx">ft</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">pageSize</span><span class="p">;</span></div><div class='line' id='LC22'>		<span class="k">this</span><span class="p">.</span><span class="nx">firstText</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">firstText</span> <span class="o">||</span> <span class="nx">ft</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">firstText</span><span class="p">;</span></div><div class='line' id='LC23'>		<span class="k">this</span><span class="p">.</span><span class="nx">previousText</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">previousText</span> <span class="o">||</span> <span class="nx">ft</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">previousText</span><span class="p">;</span></div><div class='line' id='LC24'>		<span class="k">this</span><span class="p">.</span><span class="nx">nextText</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">nextText</span> <span class="o">||</span> <span class="nx">ft</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">nextText</span><span class="p">;</span></div><div class='line' id='LC25'>		<span class="k">this</span><span class="p">.</span><span class="nx">lastText</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">lastText</span> <span class="o">||</span> <span class="nx">ft</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">lastText</span><span class="p">;</span></div><div class='line' id='LC26'>		<span class="k">this</span><span class="p">.</span><span class="nx">limitNavigation</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">limitNavigation</span> <span class="o">||</span> <span class="nx">ft</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">limitNavigation</span> <span class="o">||</span> <span class="nx">defaults</span><span class="p">.</span><span class="nx">limitNavigation</span><span class="p">,</span> <span class="mi">10</span><span class="p">);</span></div><div class='line' id='LC27'>		<span class="k">this</span><span class="p">.</span><span class="nx">limitPreviousText</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">limitPreviousText</span> <span class="o">||</span> <span class="nx">ft</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">limitPreviousText</span><span class="p">;</span></div><div class='line' id='LC28'>		<span class="k">this</span><span class="p">.</span><span class="nx">limitNextText</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">limitNextText</span> <span class="o">||</span> <span class="nx">ft</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">limitNextText</span><span class="p">;</span></div><div class='line' id='LC29'>		<span class="k">this</span><span class="p">.</span><span class="nx">limit</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">limitNavigation</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC30'>		<span class="k">this</span><span class="p">.</span><span class="nx">currentPage</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">currentPage</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC31'>		<span class="k">this</span><span class="p">.</span><span class="nx">pages</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC32'>		<span class="k">this</span><span class="p">.</span><span class="nx">control</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC33'>	<span class="p">}</span></div><div class='line' id='LC34'><br/></div><div class='line' id='LC35'>	<span class="kd">function</span> <span class="nx">Paginate</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC36'>		<span class="kd">var</span> <span class="nx">p</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC37'>		<span class="nx">p</span><span class="p">.</span><span class="nx">name</span> <span class="o">=</span> <span class="s1">&#39;Footable Paginate&#39;</span><span class="p">;</span></div><div class='line' id='LC38'><br/></div><div class='line' id='LC39'>		<span class="nx">p</span><span class="p">.</span><span class="nx">init</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">ft</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC40'>			<span class="k">if</span> <span class="p">(</span><span class="nx">ft</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">paginate</span> <span class="o">===</span> <span class="kc">true</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC41'>				<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nx">ft</span><span class="p">.</span><span class="nx">table</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;page&#39;</span><span class="p">)</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC42'>				<span class="nx">p</span><span class="p">.</span><span class="nx">footable</span> <span class="o">=</span> <span class="nx">ft</span><span class="p">;</span></div><div class='line' id='LC43'>				<span class="nx">$</span><span class="p">(</span><span class="nx">ft</span><span class="p">.</span><span class="nx">table</span><span class="p">)</span></div><div class='line' id='LC44'>					<span class="p">.</span><span class="nx">unbind</span><span class="p">(</span><span class="s1">&#39;.paging&#39;</span><span class="p">)</span></div><div class='line' id='LC45'>					<span class="p">.</span><span class="nx">bind</span><span class="p">({</span></div><div class='line' id='LC46'>						<span class="s1">&#39;footable_initialized.paging footable_row_removed.paging footable_redrawn.paging footable_sorted.paging footable_filtered.paging&#39;</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC47'>							<span class="nx">p</span><span class="p">.</span><span class="nx">setupPaging</span><span class="p">();</span></div><div class='line' id='LC48'>						<span class="p">}</span></div><div class='line' id='LC49'>					<span class="p">})</span></div><div class='line' id='LC50'>					<span class="c1">//save the filter object onto the table so we can access it later</span></div><div class='line' id='LC51'>					<span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;footable-paging&#39;</span><span class="p">,</span> <span class="nx">p</span><span class="p">);</span></div><div class='line' id='LC52'>			<span class="p">}</span></div><div class='line' id='LC53'>		<span class="p">};</span></div><div class='line' id='LC54'><br/></div><div class='line' id='LC55'>		<span class="nx">p</span><span class="p">.</span><span class="nx">setupPaging</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC56'>			<span class="kd">var</span> <span class="nx">ft</span> <span class="o">=</span> <span class="nx">p</span><span class="p">.</span><span class="nx">footable</span><span class="p">,</span></div><div class='line' id='LC57'>				<span class="nx">$tbody</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">ft</span><span class="p">.</span><span class="nx">table</span><span class="p">).</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;&gt; tbody&#39;</span><span class="p">);</span></div><div class='line' id='LC58'><br/></div><div class='line' id='LC59'>			<span class="nx">ft</span><span class="p">.</span><span class="nx">pageInfo</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">pageInfo</span><span class="p">(</span><span class="nx">ft</span><span class="p">);</span></div><div class='line' id='LC60'><br/></div><div class='line' id='LC61'>			<span class="nx">p</span><span class="p">.</span><span class="nx">createPages</span><span class="p">(</span><span class="nx">ft</span><span class="p">,</span> <span class="nx">$tbody</span><span class="p">);</span></div><div class='line' id='LC62'>			<span class="nx">p</span><span class="p">.</span><span class="nx">createNavigation</span><span class="p">(</span><span class="nx">ft</span><span class="p">,</span> <span class="nx">$tbody</span><span class="p">);</span></div><div class='line' id='LC63'>			<span class="nx">p</span><span class="p">.</span><span class="nx">fillPage</span><span class="p">(</span><span class="nx">ft</span><span class="p">,</span> <span class="nx">$tbody</span><span class="p">,</span> <span class="nx">ft</span><span class="p">.</span><span class="nx">pageInfo</span><span class="p">.</span><span class="nx">currentPage</span><span class="p">);</span></div><div class='line' id='LC64'>		<span class="p">};</span></div><div class='line' id='LC65'><br/></div><div class='line' id='LC66'>		<span class="nx">p</span><span class="p">.</span><span class="nx">createPages</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">ft</span><span class="p">,</span> <span class="nx">tbody</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC67'>			<span class="kd">var</span> <span class="nx">pages</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC68'>			<span class="kd">var</span> <span class="nx">info</span> <span class="o">=</span> <span class="nx">ft</span><span class="p">.</span><span class="nx">pageInfo</span><span class="p">;</span></div><div class='line' id='LC69'>			<span class="kd">var</span> <span class="nx">pageCount</span> <span class="o">=</span> <span class="nx">pages</span> <span class="o">*</span> <span class="nx">info</span><span class="p">.</span><span class="nx">pageSize</span><span class="p">;</span></div><div class='line' id='LC70'>			<span class="kd">var</span> <span class="nx">page</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC71'>			<span class="kd">var</span> <span class="nx">lastPage</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC72'>			<span class="nx">info</span><span class="p">.</span><span class="nx">pages</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC73'>			<span class="kd">var</span> <span class="nx">rows</span> <span class="o">=</span> <span class="nx">tbody</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;&gt; tr:not(.footable-filtered,.footable-row-detail)&#39;</span><span class="p">);</span></div><div class='line' id='LC74'>			<span class="nx">rows</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">row</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC75'>				<span class="nx">page</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">row</span><span class="p">);</span></div><div class='line' id='LC76'>				<span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">===</span> <span class="nx">pageCount</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC77'>					<span class="nx">info</span><span class="p">.</span><span class="nx">pages</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">page</span><span class="p">);</span></div><div class='line' id='LC78'>					<span class="nx">pages</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC79'>					<span class="nx">pageCount</span> <span class="o">=</span> <span class="nx">pages</span> <span class="o">*</span> <span class="nx">info</span><span class="p">.</span><span class="nx">pageSize</span><span class="p">;</span></div><div class='line' id='LC80'>					<span class="nx">page</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC81'>				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&gt;=</span> <span class="nx">rows</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="p">(</span><span class="nx">rows</span><span class="p">.</span><span class="nx">length</span> <span class="o">%</span> <span class="nx">info</span><span class="p">.</span><span class="nx">pageSize</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC82'>					<span class="nx">lastPage</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">row</span><span class="p">);</span></div><div class='line' id='LC83'>				<span class="p">}</span></div><div class='line' id='LC84'>			<span class="p">});</span></div><div class='line' id='LC85'>			<span class="k">if</span> <span class="p">(</span><span class="nx">lastPage</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="nx">info</span><span class="p">.</span><span class="nx">pages</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">lastPage</span><span class="p">);</span></div><div class='line' id='LC86'>			<span class="k">if</span> <span class="p">(</span><span class="nx">info</span><span class="p">.</span><span class="nx">currentPage</span> <span class="o">&gt;=</span> <span class="nx">info</span><span class="p">.</span><span class="nx">pages</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="nx">info</span><span class="p">.</span><span class="nx">currentPage</span> <span class="o">=</span> <span class="nx">info</span><span class="p">.</span><span class="nx">pages</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC87'>			<span class="k">if</span> <span class="p">(</span><span class="nx">info</span><span class="p">.</span><span class="nx">currentPage</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="nx">info</span><span class="p">.</span><span class="nx">currentPage</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC88'>			<span class="k">if</span> <span class="p">(</span><span class="nx">info</span><span class="p">.</span><span class="nx">pages</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC89'>				<span class="c1">//we only have a single page</span></div><div class='line' id='LC90'>				<span class="nx">$</span><span class="p">(</span><span class="nx">ft</span><span class="p">.</span><span class="nx">table</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;no-paging&#39;</span><span class="p">);</span></div><div class='line' id='LC91'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC92'>				<span class="nx">$</span><span class="p">(</span><span class="nx">ft</span><span class="p">.</span><span class="nx">table</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">&#39;no-paging&#39;</span><span class="p">);</span></div><div class='line' id='LC93'>			<span class="p">}</span></div><div class='line' id='LC94'>		<span class="p">};</span></div><div class='line' id='LC95'><br/></div><div class='line' id='LC96'>		<span class="nx">p</span><span class="p">.</span><span class="nx">createNavigation</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">ft</span><span class="p">,</span> <span class="nx">tbody</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC97'>			<span class="kd">var</span> <span class="nx">$nav</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">ft</span><span class="p">.</span><span class="nx">table</span><span class="p">).</span><span class="nx">find</span><span class="p">(</span><span class="nx">ft</span><span class="p">.</span><span class="nx">pageInfo</span><span class="p">.</span><span class="nx">pageNavigation</span><span class="p">);</span></div><div class='line' id='LC98'>			<span class="c1">//if we cannot find the navigation control within the table, then try find it outside</span></div><div class='line' id='LC99'>			<span class="k">if</span> <span class="p">(</span><span class="nx">$nav</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC100'>				<span class="nx">$nav</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">ft</span><span class="p">.</span><span class="nx">pageInfo</span><span class="p">.</span><span class="nx">pageNavigation</span><span class="p">);</span></div><div class='line' id='LC101'>				<span class="c1">//if the navigation control is inside another table, then get out</span></div><div class='line' id='LC102'>				<span class="k">if</span> <span class="p">(</span><span class="nx">$nav</span><span class="p">.</span><span class="nx">parents</span><span class="p">(</span><span class="s1">&#39;table:first&#39;</span><span class="p">).</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">$nav</span><span class="p">.</span><span class="nx">parents</span><span class="p">(</span><span class="s1">&#39;table:first&#39;</span><span class="p">)</span> <span class="o">!==</span> <span class="nx">$</span><span class="p">(</span><span class="nx">ft</span><span class="p">.</span><span class="nx">table</span><span class="p">))</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC103'>				<span class="c1">//if we found more than one navigation control, write error to console</span></div><div class='line' id='LC104'>				<span class="k">if</span> <span class="p">(</span><span class="nx">$nav</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">ft</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">debug</span> <span class="o">===</span> <span class="kc">true</span><span class="p">)</span> <span class="nx">console</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s1">&#39;More than one pagination control was found!&#39;</span><span class="p">);</span></div><div class='line' id='LC105'>			<span class="p">}</span></div><div class='line' id='LC106'>			<span class="c1">//if we still cannot find the control, then don&#39;t do anything</span></div><div class='line' id='LC107'>			<span class="k">if</span> <span class="p">(</span><span class="nx">$nav</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC108'>			<span class="c1">//if the nav is not a UL, then find or create a UL</span></div><div class='line' id='LC109'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">$nav</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;ul&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC110'>				<span class="k">if</span> <span class="p">(</span><span class="nx">$nav</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;ul:first&#39;</span><span class="p">).</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC111'>					<span class="nx">$nav</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;ul /&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC112'>				<span class="p">}</span></div><div class='line' id='LC113'>				<span class="nx">$nav</span> <span class="o">=</span> <span class="nx">$nav</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;ul&#39;</span><span class="p">);</span></div><div class='line' id='LC114'>			<span class="p">}</span></div><div class='line' id='LC115'>			<span class="nx">$nav</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;li&#39;</span><span class="p">).</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC116'>			<span class="kd">var</span> <span class="nx">info</span> <span class="o">=</span> <span class="nx">ft</span><span class="p">.</span><span class="nx">pageInfo</span><span class="p">;</span></div><div class='line' id='LC117'>			<span class="nx">info</span><span class="p">.</span><span class="nx">control</span> <span class="o">=</span> <span class="nx">$nav</span><span class="p">;</span></div><div class='line' id='LC118'>			<span class="k">if</span> <span class="p">(</span><span class="nx">info</span><span class="p">.</span><span class="nx">pages</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC119'>				<span class="nx">$nav</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;li class=&quot;footable-page-arrow&quot;&gt;&lt;a data-page=&quot;first&quot; href=&quot;#first&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">ft</span><span class="p">.</span><span class="nx">pageInfo</span><span class="p">.</span><span class="nx">firstText</span> <span class="o">+</span> <span class="s1">&#39;&lt;/a&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC120'>				<span class="nx">$nav</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;li class=&quot;footable-page-arrow&quot;&gt;&lt;a data-page=&quot;prev&quot; href=&quot;#prev&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">ft</span><span class="p">.</span><span class="nx">pageInfo</span><span class="p">.</span><span class="nx">previousText</span> <span class="o">+</span> <span class="s1">&#39;&lt;/a&gt;&lt;/li&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC121'>				<span class="k">if</span> <span class="p">(</span><span class="nx">info</span><span class="p">.</span><span class="nx">limit</span><span class="p">){</span></div><div class='line' id='LC122'>					<span class="nx">$nav</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;li class=&quot;footable-page-arrow&quot;&gt;&lt;a data-page=&quot;limit-prev&quot; href=&quot;#limit-prev&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">ft</span><span class="p">.</span><span class="nx">pageInfo</span><span class="p">.</span><span class="nx">limitPreviousText</span> <span class="o">+</span> <span class="s1">&#39;&lt;/a&gt;&lt;/li&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC123'>				<span class="p">}</span></div><div class='line' id='LC124'>				<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">info</span><span class="p">.</span><span class="nx">limit</span><span class="p">){</span></div><div class='line' id='LC125'>					<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">info</span><span class="p">.</span><span class="nx">pages</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">page</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC126'>						<span class="k">if</span> <span class="p">(</span><span class="nx">page</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC127'>							<span class="nx">$nav</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;li class=&quot;footable-page&quot;&gt;&lt;a data-page=&quot;&#39;</span> <span class="o">+</span> <span class="nx">i</span> <span class="o">+</span> <span class="s1">&#39;&quot; href=&quot;#&quot;&gt;&#39;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&lt;/a&gt;&lt;/li&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC128'>						<span class="p">}</span></div><div class='line' id='LC129'>					<span class="p">});</span></div><div class='line' id='LC130'>				<span class="p">}</span></div><div class='line' id='LC131'>				<span class="k">if</span> <span class="p">(</span><span class="nx">info</span><span class="p">.</span><span class="nx">limit</span><span class="p">){</span></div><div class='line' id='LC132'>					<span class="nx">$nav</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;li class=&quot;footable-page-arrow&quot;&gt;&lt;a data-page=&quot;limit-next&quot; href=&quot;#limit-next&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">ft</span><span class="p">.</span><span class="nx">pageInfo</span><span class="p">.</span><span class="nx">limitNextText</span> <span class="o">+</span> <span class="s1">&#39;&lt;/a&gt;&lt;/li&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC133'>					<span class="nx">p</span><span class="p">.</span><span class="nx">createLimited</span><span class="p">(</span><span class="nx">$nav</span><span class="p">,</span> <span class="nx">info</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC134'>				<span class="p">}</span></div><div class='line' id='LC135'>				<span class="nx">$nav</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;li class=&quot;footable-page-arrow&quot;&gt;&lt;a data-page=&quot;next&quot; href=&quot;#next&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">ft</span><span class="p">.</span><span class="nx">pageInfo</span><span class="p">.</span><span class="nx">nextText</span> <span class="o">+</span> <span class="s1">&#39;&lt;/a&gt;&lt;/li&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC136'>				<span class="nx">$nav</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;li class=&quot;footable-page-arrow&quot;&gt;&lt;a data-page=&quot;last&quot; href=&quot;#last&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">ft</span><span class="p">.</span><span class="nx">pageInfo</span><span class="p">.</span><span class="nx">lastText</span> <span class="o">+</span> <span class="s1">&#39;&lt;/a&gt;&lt;/li&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC137'>			<span class="p">}</span></div><div class='line' id='LC138'>			<span class="nx">$nav</span><span class="p">.</span><span class="nx">off</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="s1">&#39;a[data-page]&#39;</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="s1">&#39;a[data-page]&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC139'>				<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC140'>				<span class="kd">var</span> <span class="nx">page</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;page&#39;</span><span class="p">);</span></div><div class='line' id='LC141'>				<span class="kd">var</span> <span class="nx">newPage</span> <span class="o">=</span> <span class="nx">info</span><span class="p">.</span><span class="nx">currentPage</span><span class="p">;</span></div><div class='line' id='LC142'>				<span class="k">if</span> <span class="p">(</span><span class="nx">page</span> <span class="o">===</span> <span class="s1">&#39;first&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC143'>					<span class="nx">newPage</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC144'>				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">page</span> <span class="o">===</span> <span class="s1">&#39;prev&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC145'>					<span class="k">if</span> <span class="p">(</span><span class="nx">newPage</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="nx">newPage</span><span class="o">--</span><span class="p">;</span></div><div class='line' id='LC146'>				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">page</span> <span class="o">===</span> <span class="s1">&#39;next&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC147'>					<span class="k">if</span> <span class="p">(</span><span class="nx">newPage</span> <span class="o">&lt;</span> <span class="nx">info</span><span class="p">.</span><span class="nx">pages</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="nx">newPage</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC148'>				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">page</span> <span class="o">===</span> <span class="s1">&#39;last&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC149'>					<span class="nx">newPage</span> <span class="o">=</span> <span class="nx">info</span><span class="p">.</span><span class="nx">pages</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC150'>				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">page</span> <span class="o">===</span> <span class="s1">&#39;limit-prev&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC151'>					<span class="nx">newPage</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC152'>					<span class="kd">var</span> <span class="nx">first</span> <span class="o">=</span> <span class="nx">$nav</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;.footable-page:first a&#39;</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;page&#39;</span><span class="p">);</span></div><div class='line' id='LC153'>					<span class="nx">p</span><span class="p">.</span><span class="nx">createLimited</span><span class="p">(</span><span class="nx">$nav</span><span class="p">,</span> <span class="nx">info</span><span class="p">,</span> <span class="nx">first</span> <span class="o">-</span> <span class="nx">info</span><span class="p">.</span><span class="nx">limitNavigation</span><span class="p">);</span></div><div class='line' id='LC154'>					<span class="nx">p</span><span class="p">.</span><span class="nx">setPagingClasses</span><span class="p">(</span><span class="nx">$nav</span><span class="p">,</span> <span class="nx">info</span><span class="p">.</span><span class="nx">currentPage</span><span class="p">,</span> <span class="nx">info</span><span class="p">.</span><span class="nx">pages</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC155'>				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">page</span> <span class="o">===</span> <span class="s1">&#39;limit-next&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC156'>					<span class="nx">newPage</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC157'>					<span class="kd">var</span> <span class="nx">last</span> <span class="o">=</span> <span class="nx">$nav</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;.footable-page:last a&#39;</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;page&#39;</span><span class="p">);</span></div><div class='line' id='LC158'>					<span class="nx">p</span><span class="p">.</span><span class="nx">createLimited</span><span class="p">(</span><span class="nx">$nav</span><span class="p">,</span> <span class="nx">info</span><span class="p">,</span> <span class="nx">last</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC159'>					<span class="nx">p</span><span class="p">.</span><span class="nx">setPagingClasses</span><span class="p">(</span><span class="nx">$nav</span><span class="p">,</span> <span class="nx">info</span><span class="p">.</span><span class="nx">currentPage</span><span class="p">,</span> <span class="nx">info</span><span class="p">.</span><span class="nx">pages</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC160'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC161'>					<span class="nx">newPage</span> <span class="o">=</span> <span class="nx">page</span><span class="p">;</span></div><div class='line' id='LC162'>				<span class="p">}</span></div><div class='line' id='LC163'>				<span class="k">if</span> <span class="p">(</span><span class="nx">newPage</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">){</span></div><div class='line' id='LC164'>					<span class="k">if</span> <span class="p">(</span><span class="nx">info</span><span class="p">.</span><span class="nx">limit</span> <span class="o">&amp;&amp;</span> <span class="nx">info</span><span class="p">.</span><span class="nx">currentPage</span> <span class="o">!=</span> <span class="nx">newPage</span><span class="p">){</span></div><div class='line' id='LC165'>						<span class="kd">var</span> <span class="nx">start</span> <span class="o">=</span> <span class="nx">newPage</span><span class="p">;</span></div><div class='line' id='LC166'>						<span class="k">while</span> <span class="p">(</span><span class="nx">start</span> <span class="o">%</span> <span class="nx">info</span><span class="p">.</span><span class="nx">limitNavigation</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">){</span> <span class="nx">start</span> <span class="o">-=</span> <span class="mi">1</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC167'>						<span class="nx">p</span><span class="p">.</span><span class="nx">createLimited</span><span class="p">(</span><span class="nx">$nav</span><span class="p">,</span> <span class="nx">info</span><span class="p">,</span> <span class="nx">start</span><span class="p">);</span></div><div class='line' id='LC168'>					<span class="p">}</span></div><div class='line' id='LC169'>					<span class="nx">p</span><span class="p">.</span><span class="nx">paginate</span><span class="p">(</span><span class="nx">ft</span><span class="p">,</span> <span class="nx">newPage</span><span class="p">);</span></div><div class='line' id='LC170'>				<span class="p">}</span></div><div class='line' id='LC171'>			<span class="p">});</span></div><div class='line' id='LC172'>			<span class="nx">p</span><span class="p">.</span><span class="nx">setPagingClasses</span><span class="p">(</span><span class="nx">$nav</span><span class="p">,</span> <span class="nx">info</span><span class="p">.</span><span class="nx">currentPage</span><span class="p">,</span> <span class="nx">info</span><span class="p">.</span><span class="nx">pages</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC173'>		<span class="p">};</span></div><div class='line' id='LC174'><br/></div><div class='line' id='LC175'>		<span class="nx">p</span><span class="p">.</span><span class="nx">createLimited</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">nav</span><span class="p">,</span> <span class="nx">info</span><span class="p">,</span> <span class="nx">start</span><span class="p">){</span></div><div class='line' id='LC176'>			<span class="nx">start</span> <span class="o">=</span> <span class="nx">start</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC177'>			<span class="nx">nav</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;li.footable-page&#39;</span><span class="p">).</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC178'>			<span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">page</span><span class="p">,</span></div><div class='line' id='LC179'>				<span class="nx">$prev</span> <span class="o">=</span> <span class="nx">nav</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;li.footable-page-arrow &gt; a[data-page=&quot;limit-prev&quot;]&#39;</span><span class="p">).</span><span class="nx">parent</span><span class="p">(),</span></div><div class='line' id='LC180'>				<span class="nx">$next</span> <span class="o">=</span> <span class="nx">nav</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;li.footable-page-arrow &gt; a[data-page=&quot;limit-next&quot;]&#39;</span><span class="p">).</span><span class="nx">parent</span><span class="p">();</span></div><div class='line' id='LC181'>			<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="nx">info</span><span class="p">.</span><span class="nx">pages</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&gt;=</span><span class="mi">0</span> <span class="p">;</span> <span class="nx">i</span><span class="o">--</span><span class="p">){</span></div><div class='line' id='LC182'>				<span class="nx">page</span> <span class="o">=</span> <span class="nx">info</span><span class="p">.</span><span class="nx">pages</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC183'>				<span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&gt;=</span> <span class="nx">start</span> <span class="o">&amp;&amp;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">start</span> <span class="o">+</span> <span class="nx">info</span><span class="p">.</span><span class="nx">limitNavigation</span> <span class="o">&amp;&amp;</span> <span class="nx">page</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC184'>					<span class="nx">$prev</span><span class="p">.</span><span class="nx">after</span><span class="p">(</span><span class="s1">&#39;&lt;li class=&quot;footable-page&quot;&gt;&lt;a data-page=&quot;&#39;</span> <span class="o">+</span> <span class="nx">i</span> <span class="o">+</span> <span class="s1">&#39;&quot; href=&quot;#&quot;&gt;&#39;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&lt;/a&gt;&lt;/li&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC185'>				<span class="p">}</span></div><div class='line' id='LC186'>			<span class="p">}</span></div><div class='line' id='LC187'>			<span class="k">if</span> <span class="p">(</span><span class="nx">start</span> <span class="o">===</span> <span class="mi">0</span><span class="p">){</span> <span class="nx">$prev</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span> <span class="p">}</span></div><div class='line' id='LC188'>			<span class="k">else</span> <span class="p">{</span> <span class="nx">$prev</span><span class="p">.</span><span class="nx">show</span><span class="p">();</span> <span class="p">}</span></div><div class='line' id='LC189'>			<span class="k">if</span> <span class="p">(</span><span class="nx">start</span> <span class="o">+</span> <span class="nx">info</span><span class="p">.</span><span class="nx">limitNavigation</span> <span class="o">&gt;=</span> <span class="nx">info</span><span class="p">.</span><span class="nx">pages</span><span class="p">.</span><span class="nx">length</span><span class="p">){</span> <span class="nx">$next</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span> <span class="p">}</span></div><div class='line' id='LC190'>			<span class="k">else</span> <span class="p">{</span> <span class="nx">$next</span><span class="p">.</span><span class="nx">show</span><span class="p">();</span> <span class="p">}</span></div><div class='line' id='LC191'>		<span class="p">};</span></div><div class='line' id='LC192'><br/></div><div class='line' id='LC193'>		<span class="nx">p</span><span class="p">.</span><span class="nx">paginate</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">ft</span><span class="p">,</span> <span class="nx">newPage</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC194'>			<span class="kd">var</span> <span class="nx">info</span> <span class="o">=</span> <span class="nx">ft</span><span class="p">.</span><span class="nx">pageInfo</span><span class="p">;</span></div><div class='line' id='LC195'>			<span class="k">if</span> <span class="p">(</span><span class="nx">info</span><span class="p">.</span><span class="nx">currentPage</span> <span class="o">!==</span> <span class="nx">newPage</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC196'>				<span class="kd">var</span> <span class="nx">$tbody</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">ft</span><span class="p">.</span><span class="nx">table</span><span class="p">).</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;&gt; tbody&#39;</span><span class="p">);</span></div><div class='line' id='LC197'><br/></div><div class='line' id='LC198'>				<span class="c1">//raise a pre-pagin event so that we can cancel the paging if needed</span></div><div class='line' id='LC199'>				<span class="kd">var</span> <span class="nx">event</span> <span class="o">=</span> <span class="nx">ft</span><span class="p">.</span><span class="nx">raise</span><span class="p">(</span><span class="s1">&#39;footable_paging&#39;</span><span class="p">,</span> <span class="p">{</span> <span class="nx">page</span><span class="o">:</span> <span class="nx">newPage</span><span class="p">,</span> <span class="nx">size</span><span class="o">:</span> <span class="nx">info</span><span class="p">.</span><span class="nx">pageSize</span> <span class="p">});</span></div><div class='line' id='LC200'>				<span class="k">if</span> <span class="p">(</span><span class="nx">event</span> <span class="o">&amp;&amp;</span> <span class="nx">event</span><span class="p">.</span><span class="nx">result</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC201'><br/></div><div class='line' id='LC202'>				<span class="nx">p</span><span class="p">.</span><span class="nx">fillPage</span><span class="p">(</span><span class="nx">ft</span><span class="p">,</span> <span class="nx">$tbody</span><span class="p">,</span> <span class="nx">newPage</span><span class="p">);</span></div><div class='line' id='LC203'>				<span class="nx">info</span><span class="p">.</span><span class="nx">control</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;li&#39;</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">&#39;active disabled&#39;</span><span class="p">);</span></div><div class='line' id='LC204'>				<span class="nx">p</span><span class="p">.</span><span class="nx">setPagingClasses</span><span class="p">(</span><span class="nx">info</span><span class="p">.</span><span class="nx">control</span><span class="p">,</span> <span class="nx">info</span><span class="p">.</span><span class="nx">currentPage</span><span class="p">,</span> <span class="nx">info</span><span class="p">.</span><span class="nx">pages</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC205'>			<span class="p">}</span></div><div class='line' id='LC206'>		<span class="p">};</span></div><div class='line' id='LC207'><br/></div><div class='line' id='LC208'>		<span class="nx">p</span><span class="p">.</span><span class="nx">setPagingClasses</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">nav</span><span class="p">,</span> <span class="nx">currentPage</span><span class="p">,</span> <span class="nx">pageCount</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC209'>			<span class="nx">nav</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;li.footable-page &gt; a[data-page=&#39;</span> <span class="o">+</span> <span class="nx">currentPage</span> <span class="o">+</span> <span class="s1">&#39;]&#39;</span><span class="p">).</span><span class="nx">parent</span><span class="p">().</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;active&#39;</span><span class="p">);</span></div><div class='line' id='LC210'>			<span class="k">if</span> <span class="p">(</span><span class="nx">currentPage</span> <span class="o">&gt;=</span> <span class="nx">pageCount</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC211'>				<span class="nx">nav</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;li.footable-page-arrow &gt; a[data-page=&quot;next&quot;]&#39;</span><span class="p">).</span><span class="nx">parent</span><span class="p">().</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;disabled&#39;</span><span class="p">);</span></div><div class='line' id='LC212'>				<span class="nx">nav</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;li.footable-page-arrow &gt; a[data-page=&quot;last&quot;]&#39;</span><span class="p">).</span><span class="nx">parent</span><span class="p">().</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;disabled&#39;</span><span class="p">);</span></div><div class='line' id='LC213'>			<span class="p">}</span></div><div class='line' id='LC214'>			<span class="k">if</span> <span class="p">(</span><span class="nx">currentPage</span> <span class="o">&lt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC215'>				<span class="nx">nav</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;li.footable-page-arrow &gt; a[data-page=&quot;first&quot;]&#39;</span><span class="p">).</span><span class="nx">parent</span><span class="p">().</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;disabled&#39;</span><span class="p">);</span></div><div class='line' id='LC216'>				<span class="nx">nav</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;li.footable-page-arrow &gt; a[data-page=&quot;prev&quot;]&#39;</span><span class="p">).</span><span class="nx">parent</span><span class="p">().</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;disabled&#39;</span><span class="p">);</span></div><div class='line' id='LC217'>			<span class="p">}</span></div><div class='line' id='LC218'>		<span class="p">};</span></div><div class='line' id='LC219'><br/></div><div class='line' id='LC220'>		<span class="nx">p</span><span class="p">.</span><span class="nx">fillPage</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">ft</span><span class="p">,</span> <span class="nx">tbody</span><span class="p">,</span> <span class="nx">pageNumber</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC221'>			<span class="nx">ft</span><span class="p">.</span><span class="nx">pageInfo</span><span class="p">.</span><span class="nx">currentPage</span> <span class="o">=</span> <span class="nx">pageNumber</span><span class="p">;</span></div><div class='line' id='LC222'>			<span class="nx">$</span><span class="p">(</span><span class="nx">ft</span><span class="p">.</span><span class="nx">table</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;currentPage&#39;</span><span class="p">,</span> <span class="nx">pageNumber</span><span class="p">);</span></div><div class='line' id='LC223'>			<span class="nx">tbody</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;&gt; tr&#39;</span><span class="p">).</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC224'>			<span class="nx">$</span><span class="p">(</span><span class="nx">ft</span><span class="p">.</span><span class="nx">pageInfo</span><span class="p">.</span><span class="nx">pages</span><span class="p">[</span><span class="nx">pageNumber</span><span class="p">]).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC225'>				<span class="nx">p</span><span class="p">.</span><span class="nx">showRow</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">ft</span><span class="p">);</span></div><div class='line' id='LC226'>			<span class="p">});</span></div><div class='line' id='LC227'>		<span class="p">};</span></div><div class='line' id='LC228'><br/></div><div class='line' id='LC229'>		<span class="nx">p</span><span class="p">.</span><span class="nx">showRow</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">row</span><span class="p">,</span> <span class="nx">ft</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC230'>			<span class="kd">var</span> <span class="nx">$row</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">row</span><span class="p">),</span> <span class="nx">$next</span> <span class="o">=</span> <span class="nx">$row</span><span class="p">.</span><span class="nx">next</span><span class="p">(),</span> <span class="nx">$table</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">ft</span><span class="p">.</span><span class="nx">table</span><span class="p">);</span></div><div class='line' id='LC231'>			<span class="k">if</span> <span class="p">(</span><span class="nx">$table</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="s1">&#39;breakpoint&#39;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">$row</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="s1">&#39;footable-detail-show&#39;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">$next</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="s1">&#39;footable-row-detail&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC232'>				<span class="nx">$row</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="nx">$next</span><span class="p">).</span><span class="nx">show</span><span class="p">();</span></div><div class='line' id='LC233'>				<span class="nx">ft</span><span class="p">.</span><span class="nx">createOrUpdateDetailRow</span><span class="p">(</span><span class="nx">row</span><span class="p">);</span></div><div class='line' id='LC234'>			<span class="p">}</span></div><div class='line' id='LC235'>			<span class="k">else</span> <span class="nx">$row</span><span class="p">.</span><span class="nx">show</span><span class="p">();</span></div><div class='line' id='LC236'>		<span class="p">};</span></div><div class='line' id='LC237'>	<span class="p">}</span></div><div class='line' id='LC238'><br/></div><div class='line' id='LC239'>	<span class="nx">w</span><span class="p">.</span><span class="nx">footable</span><span class="p">.</span><span class="nx">plugins</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="nx">Paginate</span><span class="p">,</span> <span class="nx">defaults</span><span class="p">);</span></div><div class='line' id='LC240'><br/></div><div class='line' id='LC241'><span class="p">})(</span><span class="nx">jQuery</span><span class="p">,</span> <span class="nb">window</span><span class="p">);</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.02617s from github-fe132-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

