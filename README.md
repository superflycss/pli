# SuperflyCSS Project Layout Instance (PLI)

[![Greenkeeper badge](https://badges.greenkeeper.io/superflycss/pli.svg)](https://greenkeeper.io/)


The PLI (Project Layout Instance) is a javascript object model of the standard directory layout that all [SuperflyCSS](https://github.com/superfly-css/superfly-css/) modules use.  The standard layout enables users to instantly feel at home in any one of the [SuperflyCSS](https://github.com/superfly-css/superfly-css/) modules.

The PLI is inspired by the [Apache Maven Standard Directory Layout](https://maven.apache.org/guides/introduction/introduction-to-the-standard-directory-layout.html).

## Directory Descriptions

The following directories are modeled by the PLI.

### Source Directories

| Directory         | Summary                                                   |
|:------------------|:----------------------------------------------------------|
| src/main/css      | Entry level CSS module(s) are contained in this directory |
| src/main/js       | Javascript supporting dynamic demoes                      |
| src/main/html     | Dynamic demonstrations                                    |
| src/main/nunjucks | Nunjucks Templates                                        |
| src/test/css      | CSS test utilities                                        |
| src/test/js       | Javascript supporting CSS unit tests                      |
| src/test/html     | Html pages for loading the unit tests                     |
| src/test/nunjucks | Nunjucks Template unit tests                              |

### Target Directories

| Directory            | Summary                            |
|:---------------------|:-----------------------------------|
| target/main/css      | Built CSS modules                  |
| target/main/js       | Built javascript                   |
| target/main/html     | Built dynamic demo html pages      |
| target/main/nunjucks | Precompiled Nunjucks Templates     |
| target/test/css      | Built test CSS utilities           |
| target/test/js       | Built test Javascript              |
| target/test/html     | Built test html                    |
| target/test/nunjucks | Built Nunjucks Template unit tests |

### Deploy Directories

Resources that are contained in the `deploy` directory are intended to be served by `gh-pages` for all superfly-css repositories.  Resources placed in these directories are optimized by [superfly-css-task-deploy](https://github.com/superfly-css/superfly-css-task-deploy).

| Directory            | Summary                                 |
|:---------------------|:----------------------------------------|
| deploy/main/css      | Deployable CSS modules                  |
| deploy/main/js       | Deployable javascript                   |
| deploy/main/html     | Deployable dynamic demo html pages      |
| deploy/main/nunjucks | Deployable Nunjucks Templates           |
| deploy/test/css      | Deployable test CSS utilities           |
| deploy/test/js       | Deployable test Javascript              |
| deploy/test/html     | Deployable test html                    |
| deploy/test/nunjucks | Deployable Nunjucks Template unit tests |

## Extension

More directories can easily be added, and will naturally fit with the build methodology.  For example:

| Directory            | Summary        |
|:---------------------|:---------------|
| src/main/coffescript | Coffescript    |
| src/main/jade        | Jade templates |
