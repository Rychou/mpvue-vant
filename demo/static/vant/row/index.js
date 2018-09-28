import { create } from '../common/create';

create({
  relations: {
    '../col/index': {
      type: 'descendant',

      linked(target) {
        if (this.data.gutter) {
          target.setGutter(this.data.gutter);
        }
      }
    }
  },

  props: {
    gutter: {
      type: Number,
      observer: 'setGutter'
    }
  },

  ready() {
    if (this.data.gutter) {
      this.setGutter();
    }
  },

  methods: {
    setGutter() {
      const { gutter } = this.data;
      const margin = `-${Number(gutter) / 2}px`;
      const style = gutter ? `margin-right: ${margin}; margin-left: ${margin};` : '';

      this.setData({ style });
      this.getRelationNodes('../col/index').forEach((col) => {
        col.setGutter(this.data.gutter);
      });
    }
  }
});
