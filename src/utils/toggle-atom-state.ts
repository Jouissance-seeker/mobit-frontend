interface IArgs {
  setAtomState: any;
  type: 'show' | 'hide';
}

export default function toggleAtomStateHandler(args: IArgs): any {
  //
  args.setAtomState(args.type === 'hide' ? false : true);
  function isScrollbarVisible() {
    var element = document.createElement('div');
    element.style.width = '100px';
    element.style.height = '10000px';
    element.style.overflow = 'scroll';
    element.style.visibility = 'hidden';
    element.style.position = 'absolute';
    element.style.top = '-9999px';
    document.body.appendChild(element);
    var isScrollbarVisible = element.offsetWidth - element.clientWidth > 0;
    document.body.removeChild(element);
    return (
      isScrollbarVisible &&
      document.querySelector('html')!.scrollHeight >
        document.querySelector('html')!.clientHeight
    );
  }
  document.body?.classList[args.type === 'hide' ? 'remove' : 'add'](
    isScrollbarVisible()
      ? 'disable-scroll_scrollbar-is-visible'
      : 'disable-scroll_scrollbar-is-not-visible',
  );
}
