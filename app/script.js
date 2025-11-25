var currentTag = 'all';
var currentArticleIndex = 0;
var filteredArticles = [];

var readProgress = {};
var scrollPositions = {};

var allArticles = [
    {
        id: 1,
        title: 'The Future of Web Development - update forced',
        source: 'TechCrunch',
        date: '2025-11-18',
        author: 'Sarah Chen',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
        tags: ['tech'],
        content: 'Web development is evolving rapidly with new frameworks and tools emerging constantly. From TypeScript to WebAssembly, developers have more options than ever. The shift towards edge computing and serverless architectures is changing how we build and deploy applications. Performance optimization remains critical as users expect faster load times and smoother interactions.\n\nThe landscape of web development has transformed dramatically over the past decade. What started with simple HTML pages has evolved into complex, interactive applications that rival desktop software in functionality and performance. Modern web developers must navigate an ecosystem of frameworks, build tools, and deployment platforms that would have seemed impossible just a few years ago.\n\nTypeScript has emerged as a dominant force, bringing static typing to JavaScript and making large-scale applications more maintainable. Its adoption across major frameworks like React, Angular, and Vue has solidified its position as the go-to language for serious web development. The type safety it provides catches errors at compile time, reducing bugs and improving developer confidence.\n\nWebAssembly represents another paradigm shift, enabling languages like Rust, C++, and Go to run in the browser at near-native speeds. This opens up entirely new categories of web applications, from video editing to 3D games, that were previously impossible or impractical in the browser. Companies are now porting desktop applications to the web, reaching users without requiring downloads or installations.\n\nEdge computing is revolutionizing how we think about deployment and performance. By moving computation closer to users, edge platforms like Cloudflare Workers and Vercel Edge Functions reduce latency and improve user experience. This distributed architecture enables truly global applications that feel fast regardless of where users are located.\n\nServerless architectures have simplified deployment and scaling, allowing developers to focus on code rather than infrastructure. Functions can scale automatically based on demand, and developers only pay for actual usage. This has democratized web development, making it possible for small teams to build applications that can handle millions of users.\n\nPerformance optimization has become more critical than ever. Users expect instant loading, smooth interactions, and responsive interfaces. Techniques like code splitting, lazy loading, and server-side rendering are now standard practices. Core Web Vitals provide measurable metrics for user experience, and search engines factor these into rankings.\n\nThe future promises even more innovation. Progressive Web Apps blur the line between web and native applications. Web Components offer a standard way to build reusable UI elements. GraphQL provides more flexible APIs than traditional REST. The web platform continues to evolve, adding new capabilities while maintaining backward compatibility.\n\nDevelopers who stay current with these trends will find abundant opportunities. The demand for skilled web developers shows no signs of slowing, and the ability to build fast, reliable, accessible applications is more valuable than ever. The web remains the most universal platform for reaching users, and its importance will only grow in the coming years.'
    },
    {
        id: 2,
        title: 'Breaking: New AI Model Shows Promise',
        source: 'AI Weekly',
        date: '2025-11-17',
        author: 'James Roberts',
        image: 'https://images.unsplash.com/photo-1677442d019cecf8e5c1b94f404dc4b2d0a38b7d?w=800&h=400&fit=crop',
        tags: ['tech'],
        content: 'Researchers have unveiled a new machine learning model that demonstrates significant improvements over previous versions. The model shows a 35% reduction in training time while maintaining comparable accuracy. This breakthrough could have far-reaching implications for natural language processing and computer vision applications across various industries.\n\nThe research team, working across three continents, spent two years developing this innovative architecture. Their approach combines transformer models with novel attention mechanisms that dramatically reduce computational requirements. Early tests show the model matching or exceeding the performance of much larger models while using a fraction of the resources.\n\nTraining efficiency has been a major bottleneck in AI development. Large language models can cost millions of dollars to train, requiring massive datasets and energy consumption. This new model achieves similar results with significantly less data and compute time, making advanced AI more accessible to researchers and companies with limited resources.\n\nThe implications for natural language processing are particularly exciting. The model demonstrates exceptional understanding of context and nuance, generating more coherent and relevant responses. It handles multiple languages naturally, without requiring separate training for each language. This could accelerate the development of AI assistants and translation tools.\n\nComputer vision applications also benefit substantially. The model processes images faster while maintaining high accuracy in object detection and classification. This has immediate applications in autonomous vehicles, medical imaging, and security systems. Real-time processing becomes more feasible, opening up new use cases.\n\nIndustry adoption is expected to be rapid. Several major tech companies have already expressed interest in licensing the technology. Healthcare organizations see potential in diagnostic applications. Financial institutions are exploring fraud detection uses. The versatility of the model makes it applicable across numerous domains.\n\nEthical considerations remain important. The research team has published their findings openly, including details about training data and potential biases. They emphasize the need for responsible deployment and ongoing monitoring. The AI community has welcomed this transparency, contrasting with more secretive approaches from some organizations.\n\nFuture research will focus on scaling the model further and exploring specialized applications. The team is also working on making the model more interpretable, addressing one of the key criticisms of deep learning systems. Understanding how AI models make decisions is crucial for trust and accountability.\n\nThis breakthrough represents a significant step forward in making AI more efficient, accessible, and practical for real-world applications.'
    },
    {
        id: 3,
        title: 'Global Markets React to Economic News',
        source: 'Financial Times',
        date: '2025-11-16',
        author: 'Michael Johnson',
        image: 'https://images.unsplash.com/photo-1516321555542-a1c582e8a779?w=800&h=400&fit=crop',
        tags: ['news'],
        content: 'Stock markets around the world experienced significant movement following recent economic announcements. The S&P 500 rose 2.3% while European indices showed mixed results. Analysts attribute the volatility to inflation concerns and central bank policies. Investors are closely monitoring upcoming earnings reports and economic indicators.'
    },
    {
        id: 4,
        title: 'Climate Summit Reaches Historic Agreement',
        source: 'BBC News',
        date: '2025-11-15',
        author: 'Emma Wilson',
        image: 'https://images.unsplash.com/photo-1611606063065-ee7946f45b43?w=800&h=400&fit=crop',
        tags: ['news'],
        content: 'Nations have reached a comprehensive agreement on climate action targets. The accord commits participating countries to reducing emissions by 50% by 2035. This landmark agreement includes mechanisms for technology transfer and financial support for developing nations. Environmental groups are cautiously optimistic about implementation prospects.'
    },
    {
        id: 5,
        title: 'JavaScript Framework Performance Comparison',
        source: 'Dev.to',
        date: '2025-11-14',
        author: 'Lisa Anderson',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=400&fit=crop',
        tags: ['tech'],
        content: 'We compared the latest versions of React, Vue, and Angular in real-world applications. React maintains its performance lead for large applications, while Vue excels in developer experience. Angular continues to serve enterprise clients well despite its steeper learning curve. The choice ultimately depends on your project requirements and team expertise.\n\nOur comprehensive testing methodology involved building identical applications in each framework. We measured initial load times, runtime performance, bundle sizes, and development velocity. The applications ranged from simple todo lists to complex dashboards with real-time data updates. Each test was run multiple times to ensure consistency.\n\nReact continues to dominate in the enterprise space. Its virtual DOM implementation and efficient reconciliation algorithm make it excellent for large-scale applications with complex state management. The ecosystem is mature, with solutions for virtually every use case. However, the learning curve can be steep, especially when incorporating tools like Redux or MobX for state management.\n\nVue has gained significant traction for its balance of power and simplicity. The latest version shows impressive performance improvements, particularly in reactivity and rendering. The composition API provides flexibility while maintaining Vue\'s signature approachability. Many developers praise Vue for its clear documentation and gentle learning curve. For teams prioritizing developer experience, Vue is an excellent choice.\n\nAngular remains the framework of choice for many large enterprises. Its opinionated structure and comprehensive tooling make it easier to maintain consistency across large teams. The recent updates have significantly improved performance and reduced bundle sizes. TypeScript integration is first-class, providing excellent tooling support. The framework\'s completeness means fewer decisions about architecture and tooling.\n\nBundle size considerations are crucial for performance. React\'s core is relatively small, but applications often grow large with dependencies. Vue offers the smallest baseline bundle size and excellent tree-shaking. Angular\'s bundles tend to be larger but include more features out of the box. Modern build tools help optimize all frameworks.\n\nDevelopment speed varies by team experience. Teams familiar with React can move quickly due to the vast ecosystem and component libraries. Vue developers often report faster initial development due to the framework\'s simplicity. Angular teams benefit from consistent patterns and comprehensive tooling, though initial setup takes longer.\n\nThe testing landscape differs across frameworks. React has Jest and React Testing Library. Vue provides Vue Test Utils with excellent documentation. Angular includes comprehensive testing utilities built into the CLI. All frameworks support end-to-end testing with tools like Cypress or Playwright.\n\nCommunity and ecosystem health matter for long-term projects. React has the largest community and most third-party libraries. Vue has a growing, passionate community with increasing enterprise adoption. Angular benefits from Google\'s backing and regular, predictable updates. All three frameworks are mature and well-supported.\n\nThe verdict depends on your specific needs. Choose React for maximum flexibility and ecosystem. Pick Vue for developer happiness and progressive enhancement. Select Angular for structure and enterprise features. There\'s no universally correct choice—evaluate based on your team, project requirements, and long-term goals.'
    },
    {
        id: 6,
        title: 'Space Exploration Reaches New Heights',
        source: 'Space Magazine',
        date: '2025-11-13',
        author: 'David Miller',
        image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=400&fit=crop',
        tags: ['news'],
        content: 'A new spacecraft design has successfully completed its first orbital test. The vehicle demonstrates improved fuel efficiency and payload capacity. Space agencies are already planning missions using this promising technology. This advancement brings us closer to sustainable long-term space exploration and research.'
    },
    {
        id: 7,
        title: 'Cybersecurity Threats in 2025',
        source: 'Security Today',
        date: '2025-11-12',
        author: 'Robert Taylor',
        image: 'https://images.unsplash.com/photo-1563986768609-4f3ee5f14c0e?w=800&h=400&fit=crop',
        tags: ['tech'],
        content: 'Cybersecurity experts warn of emerging threats targeting cloud infrastructure and IoT devices. Ransomware attacks have become more sophisticated and targeted. Organizations are urged to implement zero-trust security models and conduct regular penetration testing. Employee training remains one of the most cost-effective defense mechanisms.'
    },
    {
        id: 8,
        title: 'Healthcare Innovation Saves Lives',
        source: 'Medical News',
        date: '2025-11-11',
        author: 'Katherine Brown',
        image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=800&h=400&fit=crop',
        tags: ['news'],
        content: 'New medical technologies are transforming patient care and treatment outcomes. Telemedicine platforms continue to expand access to healthcare services in rural areas. AI-assisted diagnostics show promise in early disease detection. The integration of these technologies is reducing healthcare costs while improving patient satisfaction.'
    },
    {
        id: 9,
        title: 'The Rise of Quantum Computing',
        source: 'Tech Insider',
        date: '2025-11-10',
        author: 'Christopher Lee',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
        tags: ['tech'],
        content: 'Quantum computing is transitioning from theoretical research to practical applications. Companies are developing quantum computers with increasing qubit counts and improved stability. Industries like pharmaceuticals and finance are exploring use cases. While challenges remain, quantum computing promises revolutionary solutions to complex problems.'
    }
];

function loadReadProgress() {
    try {
        var saved = localStorage.getItem('readProgress');
        if (saved) {
            readProgress = JSON.parse(saved);
        }
    } catch (e) {
        readProgress = {};
    }
}

function saveReadProgress() {
    try {
        localStorage.setItem('readProgress', JSON.stringify(readProgress));
    } catch (e) {}
}

function isIPhone() {
    if (typeof window === 'undefined' || !window.navigator) {
        return false;
    }
    return /iPhone/i.test(window.navigator.userAgent || '');
}

function setupSwipeNavigation() {
    var container = document.querySelector('.articles-container');
    if (!container || container.getAttribute('data-swipe-ready') === 'true') {
        return;
    }

    container.setAttribute('data-swipe-ready', 'true');

    var startX = 0;
    var startY = 0;
    var threshold = 50;

    container.addEventListener('touchstart', function(e) {
        if (!e.touches || e.touches.length !== 1) {
            return;
        }
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    }, { passive: true });

    container.addEventListener('touchend', function(e) {
        if (!e.changedTouches || e.changedTouches.length !== 1) {
            return;
        }

        var endX = e.changedTouches[0].clientX;
        var endY = e.changedTouches[0].clientY;
        var diffX = endX - startX;
        var diffY = endY - startY;

        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > threshold) {
            if (diffX < 0) {
                nextArticle();
            } else {
                previousArticle();
            }
        }
    }, { passive: true });
}

function enableIOSMode() {
    if (!isIPhone()) {
        return;
    }
    document.body.classList.add('ios');
    setupSwipeNavigation();
}

function filterArticles() {
    if (currentTag === 'all') {
        filteredArticles = allArticles;
    } else {
        filteredArticles = allArticles.filter(function(article) {
            return article.tags.includes(currentTag);
        });
    }
}

function trackScrollProgress(articleId, scrollElement) {
    var scrollHeight = scrollElement.scrollHeight - scrollElement.clientHeight;
    var scrolled = scrollElement.scrollTop;
    var progress = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 100;
    
    // Save scroll position
    scrollPositions[articleId] = scrolled;
    
    var currentProgress = readProgress[articleId];
    var wasCompleted = currentProgress && currentProgress.completed;
    var completed = wasCompleted || progress >= 90;
    
    readProgress[articleId] = {
        progress: wasCompleted ? 100 : Math.round(progress),
        completed: completed,
        lastRead: new Date().toISOString()
    };
    saveReadProgress();
    
    // Update scroll progress bar with smooth animation
    var progressBar = document.getElementById('scrollProgressBar');
    if (progressBar && scrollHeight > 0) {
        progressBar.style.height = progress + '%';
    }
    
    // Track title visibility and show sticky title with buffer
    var titleElement = scrollElement.querySelector('.article-title');
    var headerTitle = document.getElementById('headerTitle');
    var stickyTitle = document.getElementById('stickyTitle');
    
    if (titleElement && stickyTitle && headerTitle) {
        var titleRect = titleElement.getBoundingClientRect();
        var scrollContainerRect = scrollElement.getBoundingClientRect();
        var buffer = 10; // pixels
        
        // Show sticky title if the original title has scrolled past (with buffer)
        if (titleRect.bottom < scrollContainerRect.top + buffer) {
            var articleIndex = currentArticleIndex + 1;
            var articleTotal = filteredArticles.length;
            var statusText = '';
            if (completed) {
                statusText = ' ✓';
            } else if (readProgress[articleId] && readProgress[articleId].progress > 10) {
                statusText = ' ' + readProgress[articleId].progress + '%';
            }
            
            var isMobile = window.innerWidth <= 768;
            var titleText = titleElement.textContent;
            
            // On mobile, show compact format
            if (isMobile) {
                stickyTitle.textContent = articleIndex + '/' + articleTotal + ' ' + titleText + statusText;
            } else {
                stickyTitle.textContent = articleIndex + '/' + articleTotal + '  ' + titleText + statusText;
            }
            
            stickyTitle.classList.add('visible');
            headerTitle.classList.add('hidden');
        } else {
            stickyTitle.classList.remove('visible');
            headerTitle.classList.remove('hidden');
        }
    }
}

function renderArticles() {
    var pagesContainer = document.getElementById('articlePages');
    pagesContainer.innerHTML = '';

    for (var idx = 0; idx < filteredArticles.length; idx++) {
        var article = filteredArticles[idx];
        var page = document.createElement('div');
        page.className = 'article-page';
        page.setAttribute('data-article-id', article.id);
        
        var html = '<img src="' + article.image + '" alt="' + article.title + '" class="article-image" onerror="this.style.display=\'none\'">';
        html += '<div class="article-header">';
        html += '<h1 class="article-title">' + article.title + '</h1>';
        html += '<div class="article-meta">';
        html += '<div class="article-meta-item"><span class="article-source">' + article.source + '</span></div>';
        html += '<div class="article-meta-item">' + article.date + '</div>';
        html += '<div class="article-meta-item">By ' + article.author + '</div>';
        html += '</div></div>';
        html += '<div class="article-content"><p>' + article.content + '</p></div>';
        
        page.innerHTML = html;
        
        (function(articleId, pageElement) {
            pageElement.addEventListener('scroll', function() {
                trackScrollProgress(articleId, pageElement);
            });
            
            pageElement.setAttribute('data-view-timer', '');
        })(article.id, page);
        
        pagesContainer.appendChild(page);
    }

    currentArticleIndex = 0;
    updateUI();
}

function setupTagNavigation() {
    var tagItems = document.querySelectorAll('.tag-item');
    for (var i = 0; i < tagItems.length; i++) {
        (function(item) {
            item.addEventListener('click', function() {
                var tagItems = document.querySelectorAll('.tag-item');
                for (var j = 0; j < tagItems.length; j++) {
                    tagItems[j].classList.remove('active');
                }
                item.classList.add('active');
                currentTag = item.getAttribute('data-tag');
                filterArticles();
                renderArticles();
            });
        })(tagItems[i]);
    }
}

function setupConfigModal() {
    var configBtn = document.getElementById('configBtn');
    var configModal = document.getElementById('configModal');
    var closeConfigBtn = document.getElementById('closeConfigBtn');

    configBtn.addEventListener('click', function() {
        configModal.classList.add('show');
        renderFeedsConfig();
    });

    closeConfigBtn.addEventListener('click', function() {
        configModal.classList.remove('show');
    });

    configModal.addEventListener('click', function(e) {
        if (e.target === configModal) {
            configModal.classList.remove('show');
        }
    });
}

function addFeed() {
    var feedName = document.getElementById('feedName').value;
    var feedUrl = document.getElementById('feedUrl').value;
    var feedTags = document.getElementById('feedTags').value;

    if (!feedName || !feedUrl) {
        alert('Please enter both name and URL');
        return;
    }

            var tags = [];
            if (feedTags) {
                var tagArray = feedTags.split(',');
                for (var i = 0; i < tagArray.length; i++) {
                    var tag = tagArray[i].trim().toLowerCase();
                    if (tag && tags.indexOf(tag) === -1) {
                        tags.push(tag);
                    }
                }
            }    var newFeed = {
        id: Math.max.apply(null, allArticles.map(function(a) { return a.id; })) + 1,
        title: feedName,
        source: feedName,
        date: new Date().toISOString().split('T')[0],
        author: 'Feed Author',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
        tags: tags,
        content: 'This is a custom feed. Content will be loaded from the RSS feed URL.'
    };

    allArticles.push(newFeed);

            var tagList = document.getElementById('tagList');
            for (var i = 0; i < tags.length; i++) {
                var tag = tags[i];
                var existingTag = document.querySelector('[data-tag="' + tag + '"]');
                if (!existingTag) {
                    var li = document.createElement('li');
                    li.className = 'tag-item';
                    li.setAttribute('data-tag', tag);
                    li.textContent = tag;
                    tagList.appendChild(li);
                }
            }    setupTagNavigation();

    document.getElementById('feedName').value = '';
    document.getElementById('feedUrl').value = '';
    document.getElementById('feedTags').value = '';

    renderFeedsConfig();
    filterArticles();
    renderArticles();
}

function removeFeed(feedId) {
    var idx = -1;
    for (var i = 0; i < allArticles.length; i++) {
        if (allArticles[i].id === feedId) {
            idx = i;
            break;
        }
    }
    if (idx !== -1) {
        allArticles.splice(idx, 1);
    }
    renderFeedsConfig();
    filterArticles();
    renderArticles();
}

function renderFeedsConfig() {
    var feedsList = document.getElementById('feedsList');
    feedsList.innerHTML = '';

    var customFeeds = allArticles.filter(function(article) {
        return article.id > 9;
    });

    if (customFeeds.length === 0) {
        feedsList.innerHTML = '<p style="color: var(--text-secondary); font-size: 0.9rem;">No custom feeds added yet</p>';
        return;
    }

    for (var i = 0; i < customFeeds.length; i++) {
        var feed = customFeeds[i];
        var feedItem = document.createElement('div');
        feedItem.className = 'feed-item';
        feedItem.innerHTML = '<div class="feed-item-name">' + feed.title + '</div>';
        var removeBtn = document.createElement('button');
        removeBtn.className = 'feed-remove-btn';
        removeBtn.textContent = 'Remove';
        (function(fid) {
            removeBtn.addEventListener('click', function() {
                removeFeed(fid);
            });
        })(feed.id);
        feedItem.appendChild(removeBtn);
        feedsList.appendChild(feedItem);
    }
}

function nextArticle() {
    if (currentArticleIndex < filteredArticles.length - 1) {
        var pages = document.querySelectorAll('.article-page');
        pages[currentArticleIndex].classList.add('next');
        currentArticleIndex++;
        updateUI();
    }
}

function previousArticle() {
    if (currentArticleIndex > 0) {
        var pages = document.querySelectorAll('.article-page');
        pages[currentArticleIndex].classList.add('prev');
        currentArticleIndex--;
        updateUI();
    }
}

function updateUI() {
    var headerTitle = document.getElementById('headerTitle');
    var stickyTitle = document.getElementById('stickyTitle');
    headerTitle.textContent = currentTag + ' - ' + filteredArticles.length + ' articles';
    
    // Reset sticky title when changing articles
    stickyTitle.classList.remove('visible');
    headerTitle.classList.remove('hidden');

    var pages = document.querySelectorAll('.article-page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove('next', 'prev');
        if (i !== currentArticleIndex) {
            pages[i].style.display = 'none';
        } else {
            pages[i].style.display = 'flex';
            
            var currentPage = pages[i];
            var articleId = currentPage.getAttribute('data-article-id');
            
            // Reset progress bar
            var progressBar = document.getElementById('scrollProgressBar');
            if (progressBar) {
                progressBar.style.height = '0%';
            }
            
            // Restore scroll position or reset to top
            setTimeout(function(page, id) {
                if (scrollPositions[id] !== undefined) {
                    page.scrollTop = scrollPositions[id];
                    // Update progress bar to match restored position
                    var scrollHeight = page.scrollHeight - page.clientHeight;
                    if (scrollHeight > 0) {
                        var progress = (scrollPositions[id] / scrollHeight) * 100;
                        if (progressBar) {
                            progressBar.style.height = progress + '%';
                        }
                    }
                } else {
                    page.scrollTop = 0;
                }
                
                var scrollHeight = page.scrollHeight - page.clientHeight;
                if (scrollHeight <= 0 && page.style.display !== 'none') {
                    setTimeout(function() {
                        if (page.style.display !== 'none' && !readProgress[id]) {
                            readProgress[id] = {
                                progress: 100,
                                completed: true,
                                lastRead: new Date().toISOString()
                            };
                            saveReadProgress();
                        }
                    }, 5000);
                }
            }, 100, currentPage, articleId);
        }
    }

    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    prevBtn.disabled = currentArticleIndex === 0;
    nextBtn.disabled = currentArticleIndex === filteredArticles.length - 1;
}

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 37) {
        previousArticle();
    } else if (e.keyCode === 39) {
        nextArticle();
    }
});

document.getElementById('prevBtn').addEventListener('click', previousArticle);
document.getElementById('nextBtn').addEventListener('click', nextArticle);

loadReadProgress();
setupTagNavigation();
setupConfigModal();
enableIOSMode();
filterArticles();
renderArticles();
