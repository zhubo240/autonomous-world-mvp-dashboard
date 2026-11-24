/* Public editorial edition. Only reviewed summaries and independently public sources. */
(() => {
  'use strict';
  const edition = {
    date: '2026 年 11 月 24 日',
    cutoff: '截止于当日外部信号基线、观察顺序调整及生活探索草案完成阶段。',
    stories: [
      {
        id: 'recover', domain: '工程探索', role: '外部信号系统',
        title: '终端丢了，Agent 还能接着工作吗？',
        deck: '几个 Agent 并行做事时，中断后能不能接上原来的工作很重要。',
        discovery: '外部信号系统核对了 Orca v1.4.272 的发布说明。官方称，开启 Resume work on restart 后，终端 worker 即使丢了原终端，也能回到保存的会话。',
        why: '能找回旧会话，就有机会了解原来做到了哪一步、还有什么没做。',
        boundary: '回到旧会话不保证任务能继续，也不证明任务已经正确完成。',
        next: '外部信号系统建议程序员在隔离环境里试试能否接续同一测试任务，本地还没试跑。',
        question: '终端丢了之后，Agent 能否接着做原来的任务？',
        source: 'https://github.com/stablyai/orca/releases/tag/v1.4.272',
        sourceLabel: 'Orca v1.4.272 官方发布说明',
        scene: '已核对官方发布说明，并提出隔离环境中的测试建议。',
        wait: '建议在隔离环境里试试能否接续同一测试任务，本地还没试跑。'
      },
      {
        id: 'intent', domain: '信息巡阅', role: '信息巡阅系统',
        title: '长任务交齐文件，怎样确认最初的要求没丢？',
        deck: '文件越多，越要逐项核对要求。',
        discovery: '信息巡阅系统读了 Design Anything 的研究报道。对照原论文，该方法把设计意图保存在模型之外，关联约束、工作步骤和交付物。论文作者用同一 GPT-5.6 Sol High 在 DesignAnything-Bench 上比较：约束满足率为 92.5%，最强同模型基线为 78.1%，相差 14.4 个百分点。',
        why: '巡阅还读到一则行业复盘：改规则常牵动提示词、工具和校验，改完得重新评估。',
        boundary: '这组数字仅限该模型和设计任务基准，不能推广到其他工作。',
        next: '两渠道各读到一篇原文，仅是单次验证；定时巡阅能否复现仍待核对。论文方法尚未在本世界任务中验证。',
        question: '交付物多了，怎样检查最初的要求是否仍然满足？',
        source: 'https://arxiv.org/abs/2610.24771',
        sourceLabel: 'Design Anything, Design at Scale 原论文',
        scene: '已读到研究报道正文，公开原论文提供了独立依据。',
        wait: '两渠道各读到一篇原文，仅是单次验证；定时巡阅能否复现仍待核对。论文方法尚未在本世界任务中验证。'
      },
      {
        id: 'walk', domain: '生活探索', role: '生活探索试行',
        title: '熟悉的路，也可以做一次很小的探索',
        deck: '由信息巡阅承接的生活探索试行，将一条公开研究转成了低投入的体验草案：在熟悉的地方换一种注意方式。',
        discovery: '一项随机研究让 60 位健康老年人连续八周每周做一次 15 分钟户外散步；额外获得敬畏与好奇观察指引的一组，报告散步时有更多惊奇与愉悦感。由此想到一个可尝试的改造：在熟悉的路线上短步行，挑光影、声音或材料中的一种留意。',
        why: '结束只记下发现了什么、是否还想再看，用实际感受判断值不值得继续。',
        boundary: '研究样本是健康老年人，指引也包含探索新地点，不能单独证明熟悉路线改变注意方式的效果。',
        next: '草案已形成，尚未试做；体验反馈待取得。',
        question: '能否在不增加太多投入的情况下，从熟悉环境里找到愿意继续留意的事？',
        source: 'https://escholarship.org/content/qt4c62428x/qt4c62428x.pdf',
        sourceLabel: 'Sturm 等：Awe Walks 研究（公开作者稿）',
        scene: '一个具体、低投入的体验草案已经形成，问题可以从研究走到实际观察。',
        wait: '草案还没试做，研究只是启发，实际是否有发现、是否愿意继续均未知。'
      }
    ],
    coordination: {
      title: '这次，两个系统没有接上；世界改了它们的先后',
      first: '内部检查系统先完成新版首轮观察，发现尚未收到外部信号回报。外部信号系统随后才建立首条公开来源的比较基线。',
      change: '世界规则控制者据此调整了任务安排，让外部来源对照先于内部观察。设置已更新。',
      next: '下一轮能否及时完成对照并被内部检查使用，仍待复验；首条基线尚不代表发现新增。'
    },
    reading: {
      first: '首轮定时巡阅只找到两渠道的线索，没有读到正文。',
      change: '治理者指出更合适的读取入口，控制者记录了新方法，巡阅系统各取得一篇原文的单次读取证据。',
      next: '这是一次读取路径验证，不是两轮巡阅成功；下次定时巡阅能否再次读到原文，还要核对。首轮检查提出的另一项巡阅调整也仍待系统验证。'
    },
    delivery: '治理者提出看板比较需要，日常助手转达给世界规则控制者，控制者明确设计要求，程序员完成公开交付和技术核对。这是一段已有结果的组织交接；最终形态仍由治理者选择。'
  };
  const views = [
    { id: 'daily', name: '日报', desc: '按今天最值得读的发现，读完三篇短报道。' },
    { id: 'notes', name: '探索札记', desc: '沿具体问题阅读证据、边界与下一步。' },
    { id: 'letters', name: '各域来信', desc: '从外部信息、研究巡阅和生活探索试行的实际产出看世界。' },
    { id: 'relay', name: '接力故事', desc: '看工作是如何从发现转到另一个角色、再回到验证的。' },
    { id: 'scene', name: '世界此刻', desc: '看眼前已展开的事情、仍在等待的结果，以及接下来可能发生什么。' }
  ];
  const legacy = ['overview', 'timeline', 'evidence', 'capabilities', 'handoffs', 'decisions'];
  const stories = edition.stories;
  const findView = id => views.find(v => v.id === id);
  const content = document.getElementById('content');
  const home = document.body.dataset.page === 'home';
  const folder = path => location.protocol === 'file:' ? `${path}index.html` : path;
  const dateLine = extra => `<div class="edition-line"><strong>实际记录摘要</strong><span class="date"><time datetime="2026-11-24">${edition.date}</time>${extra ? ` · ${extra}` : ''}</span></div>`;
  const source = story => `<p class="source"><a href="${story.source}" target="_blank" rel="noopener noreferrer">公开依据：${story.sourceLabel}</a></p>`;
  const stage = (text, boundary) => `<p class="stage"><strong>目前进展</strong>　${text} ${boundary}</p>`;
  const linkTo = id => `${home ? folder('demos/') : ''}#${id}`;
  const entryLinks = () => `<div class="entry-links">${views.map(v => `<a href="${linkTo(v.id)}">${v.name}</a>`).join('')}<a href="${linkTo('compare')}">选择并看</a><a class="secondary" href="${home ? folder('status/') : folder('../status/')}">运行记录</a><a class="secondary" href="${home ? folder('status/demos/') : folder('../status/demos/')}">历史审计</a></div>`;
  const story = s => `<article class="story" aria-label="${s.title}"><div><span class="kicker">${s.domain} · ${s.role}</span><h2>${s.title}</h2></div><p class="deck">${s.deck}</p><p>${s.discovery}</p><p>${s.why}</p>${stage(s.next, s.boundary)}${source(s)}</article>`;
  const coordination = () => `<section class="cross-note"><div><span class="kicker">世界自身的变化</span><h2>${edition.coordination.title}</h2></div><div><p>${edition.coordination.first}${edition.coordination.change}</p><p class="muted">${edition.coordination.next}</p></div></section>`;
  const readingEntry = () => `<section class="reading-entry" id="reading"><span class="kicker">同一份底稿，不同读法</span><h2>读完，再从另一个角度看看</h2><p>以下五种读法都来自本期同一组已核实记录。可以分别打开，也能选择两种并排阅读。流程与运行细节另放在次级入口。</p>${entryLinks()}</section>`;
  function renderHome() {
    content.innerHTML = `${dateLine('本期已核实的世界近况')}<section class="hero"><h1>世界近况</h1><p class="intro">今天，世界查到了有关 Agent 中断后恢复会话的官方说明，读到一篇关于长任务如何保留要求的研究报道，并提出了一个可以试做的生活问题。</p><p class="sub">${edition.cutoff} 非实时播报。</p></section><section class="feature">${story(stories[0])}</section><div class="story-grid">${story(stories[1])}${story(stories[2])}</div>${coordination()}${readingEntry()}`;
  }
  function daily() {
    return `<div class="daily-list">${stories.map(story).join('')}</div>${coordination()}`;
  }
  function notes() {
    return `<div class="notes-list">${stories.map(s => `<article class="question-note"><div><span class="kicker">${s.domain}</span><h2>${s.question}</h2><p class="prompt">${s.deck}</p>${source(s)}</div><div class="note-sections"><section><h3>已经看到</h3><p>${s.discovery}</p></section><section><h3>这个问题为什么值得追</h3><p>${s.why}</p></section><section><h3>不能由此推出的结论</h3><p>${s.boundary}</p></section><section><h3>下一步需要什么证据</h3><p>${s.next}</p></section></div></article>`).join('')}</div><section class="cross-note"><div><span class="kicker">另一个正在查验的问题</span><h2>怎样让新发现及时进入下一轮观察？</h2></div><div><p>${edition.coordination.first}${edition.coordination.change}</p><p class="muted">${edition.coordination.next}</p></div></section>`;
  }
  function letters() {
    const order = [stories[2], stories[0], stories[1]];
    return `<p class="scene-lead">按实际产出整理的来信摘要，并非 Agent 原话。</p><div class="letter-grid">${order.map(s => `<article class="letter"><div class="letter-head"><span>来自：${s.role}</span><time datetime="2026-11-24">${edition.date}</time></div><h2>${s.title}</h2><p>${s.discovery}</p><p>${s.why}</p><p class="letter-next"><b>目前进展：</b>${s.next} ${s.boundary}</p>${source(s)}</article>`).join('')}</div>${coordination()}`;
  }
  const step = (role, text, pending = false, s = null) => `<li class="${pending ? 'pending' : ''}"><span class="who">${role}</span><div><p>${text}</p>${s ? source(s) : ''}</div></li>`;
  function relay() {
    const [recovery, intent, walk] = stories;
    return `<article class="relay-story"><span class="kicker">已发生的接力 · 信息与观察</span><h2>一个报告晚到了，于是世界改变了顺序</h2><ol class="relay-steps">${step('内部检查系统', '新版首轮观察实际发生，看到一次原文读取验证，也发现外部信号尚无回报。')}${step('外部信号系统', '随后建立首条公开来源基线。' + recovery.discovery, false, recovery)}${step('世界规则控制者', edition.coordination.change)}${step('下一轮观察', edition.coordination.next, true)}${step('建议承接者', recovery.next + ' ' + recovery.boundary, true)}</ol></article><article class="relay-story"><span class="kicker">已发生的接力 · 从线索到正文</span><h2>读取遇阻之后，世界换了一条路径</h2><ol class="relay-steps">${step('信息巡阅系统', edition.reading.first)}${step('治理者与控制者', '治理者指出更合适的读取入口，控制者把方法记录下来。')}${step('信息巡阅系统', '随后两个渠道各成功读到一篇原文。' + intent.discovery + ' ' + intent.why + ' ' + intent.boundary, false, intent)}${step('后续实际巡阅', edition.reading.next + ' 论文方法尚未在本世界的任务中验证。', true)}</ol></article><article class="relay-story"><span class="kicker">另一条尚未闭合的线</span><h2>研究变成生活体验草案</h2><ol class="relay-steps">${step('生活探索试行', walk.discovery, false, walk)}${step('草案', walk.why + ' ' + walk.boundary)}${step('后续体验', walk.next, true)}</ol></article><section class="cross-note"><div><span class="kicker">一段已经交付的组织合作</span><h2>看板也经历了真实接力</h2></div><p>${edition.delivery}</p></section>`;
  }
  function scene() {
    return `<p class="scene-lead">眼前有三件事在展开：Orca 恢复旧会话的官方说明、Design Anything 的研究报道，以及一个可实际尝试的生活草案。</p><div class="scene-columns"><section class="scene-column"><h2>已经展开</h2>${stories.map(s => `<article><h3>${s.title}</h3><p>${s.discovery}${s.id === 'intent' ? ' ' + s.why : ''}</p>${source(s)}</article>`).join('')}</section><section class="scene-column wait"><h2>仍在等待</h2>${stories.map(s => `<article><h3>${s.domain}</h3><p>${s.wait} ${s.boundary}</p></article>`).join('')}<article><h3>系统之间</h3><p>${edition.coordination.next}</p></article></section></div><section class="scene-next"><span class="kicker">可能的下一步</span><h2>如果世界继续推进</h2><p>程序员可在隔离环境里试着接续同一任务；信息巡阅可以在下次定时巡阅中确认两渠道是否还能读到原文；生活草案要等试做与反馈。</p><p>${edition.coordination.first}${edition.coordination.change}</p><p class="muted">本期最新实际检查没有记录新的治理者待决事项。</p></section>`;
  }
  const renderers = { daily, notes, letters, relay, scene };
  const descriptions = {
    daily: '按今天最值得读的发现，先读成果，再看它们如何被验证。',
    notes: '沿三条仍值得追的真实问题阅读：见过什么、为什么重要、还缺什么。',
    letters: '外部信号、信息巡阅和生活探索试行，分别留下了什么产出。',
    relay: '在已记录的动作之间，找出谁接住了哪件事、哪里还没有接上。',
    scene: '截至本期，哪些事情已经展开，哪些还在等待。',
    compare: '任选一种或两种阅读角度，并排看同一份底稿。这个选择只改变阅读页面，不会设定最终看板。',
    read: '同一份已核实记录，可以按报道、问题、各域产出、真实接力或眼前局面阅读。'
  };
  function route() {
    const [id, rest = ''] = location.hash.slice(1).split('/');
    return { id: findView(id) || id === 'compare' ? id : 'read', selected: [...new Set(rest.split(',').filter(x => findView(x)))].slice(0, 2) };
  }
  function redirectLegacy() {
    const hash = location.hash;
    const [id, rest = ''] = hash.slice(1).split('/');
    if (home) {
      const oldAnchor = { roles: 'roles', activity: 'activity', coverage: 'coverage', rules: 'roles' }[id];
      if (oldAnchor) { location.replace(`${folder('status/')}#${oldAnchor}`); return true; }
    } else if (legacy.includes(id) || (id === 'compare' && rest.split(',').some(x => legacy.includes(x)))) {
      location.replace(`${folder('../status/demos/')}${hash}`); return true;
    }
    return false;
  }
  function readerHead(id) {
    const title = findView(id)?.name || (id === 'compare' ? '选择并看' : '五种读法');
    return `${dateLine('同一份已核实底稿')}<section class="reader-header"><h1>${title}</h1><p>${descriptions[id]}</p><p class="muted date">${edition.cutoff}</p></section>`;
  }
  function overview() {
    return `<div class="overview-list">${views.map(v => `<a href="#${v.id}"><h2>${v.name}</h2><p>${v.desc}</p></a>`).join('')}<a href="#compare"><h2>选择并看</h2><p>自由并列一到两种读法，便于比较。</p></a></div>`;
  }
  function compare(selected) {
    const choice = index => `<label>阅读角度 ${index + 1}<select name="compare-${index}" data-choice="${index}" ${index === 1 && !selected[0] ? 'disabled' : ''}><option value="">请选择</option>${views.map(v => `<option value="${v.id}" ${selected[index] === v.id ? 'selected' : ''} ${selected[1-index] === v.id ? 'disabled' : ''}>${v.name}</option>`).join('')}</select></label>`;
    return `<div class="comparison-form" role="group" aria-label="选择并看视角">${choice(0)}${choice(1)}<p class="muted">可分享当前链接；刷新后保留选择。</p></div>${selected.length ? `<div class="comparison-grid ${selected.length === 1 ? 'single' : ''}">${selected.map(id => `<section class="comparison-pane" data-pane="${id}"><div class="pane-title"><h2>${findView(id).name}</h2><a href="#${id}">独立阅读</a></div>${renderers[id]()}</section>`).join('')}</div>` : '<p class="comparison-empty">请选择一个或两个视角，读同一组真实内容。这里没有预设组合。</p>'}`;
  }
  function renderReader(focusIndex = null) {
    const { id, selected } = route();
    const nav = document.getElementById('read-nav'), items = [{ id: 'read', name: '五种读法' }, ...views, { id: 'compare', name: '选择并看' }];
    if (!nav.children.length) nav.innerHTML = items.map(v => `<a href="#${v.id}">${v.name}</a>`).join('');
    for (const a of nav.children) {
      if (a.hash === `#${id}`) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    }
    content.innerHTML = readerHead(id) + (id === 'read' ? overview() : id === 'compare' ? compare(selected) : renderers[id]()) + `<div class="reader-end"><a href="${folder('../')}">返回世界近况</a><a href="#read">其他读法</a><a href="#compare">选择并看</a></div>`;
    document.title = `${items.find(v => v.id === id).name} · 世界近况`;
    if (focusIndex !== null) content.querySelector(`[data-choice="${focusIndex}"]`)?.focus({ preventScroll: true });
  }
  if (redirectLegacy()) return;
  if (home) {
    renderHome();
    window.addEventListener('hashchange', redirectLegacy);
  } else {
    renderReader();
    window.addEventListener('hashchange', () => { if (!redirectLegacy()) { renderReader(); window.scrollTo(0, 0); } });
    content.addEventListener('change', event => {
      if (!event.target.matches('select[data-choice]')) return;
      const values = [...content.querySelectorAll('select[data-choice]')].map(s => s.value);
      const selected = [...new Set(values.filter(x => findView(x)))];
      history.replaceState(null, '', `#compare${selected.length ? `/${selected.join(',')}` : ''}`);
      renderReader(Number(event.target.dataset.choice));
    });
  }
})();
