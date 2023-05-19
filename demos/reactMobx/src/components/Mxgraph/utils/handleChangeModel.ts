
// 注册change model 方法
function handleChangeModel(callback) {
   this.getModel().beginUpdate();

   try {
     callback();
   } finally {
     // Updates the display
     this.getModel().endUpdate();
   }
}

export { handleChangeModel };