<!--
 * @Author: yushijun
 * @Date: 2021-04-01 17:17:36
 * @LastEditors: yushijun
 * @LastEditTime: 2021-04-02 14:46:30
-->
<template>
  <button
    class="fe-button"
    @click="handleClick"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :class="[
      type?'fe-button--'+type:'',
      buttonSize?'fe-button--'+buttonSize:'',
      {
        'fe-button--disabled':disabled || loading,
        'is-plain':plain
      }
    ]"
  >
    <!-- loading -->
    <i class="idss-font el-icon-idss-loading" v-if="loading"></i>
    <!-- 文案 -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'YButton',
  inject: {
    feForm: {
      default: ''
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },
  computed: {
    buttonSize () {
      return (this.feForm || {}).size || this.size
    }
  },
  methods: {
    handleClick (evt) {
      console.log(11)
      this.$emit('click', evt)
    }
  }
}
</script>
<style lang="less">
.fe-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid var(--border-base-color);
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  padding: 10px 20px;
  font-size: 13px;
  border-radius: 4px;
  color: #fff;
  &--default{
    color: #606266;
  }
  &--primary{
    background: var(--color-primary-10);
    border-color: var(--color-primary-10);
    &.is-plain{
      background-color: var(--color-primary-2);
      border-color: var(--color-primary-5);
      color: var(--color-primary);
    }
  }
  &--success{
    background: var(--color-success);
    border-color: var(--color-success);
    &.is-plain{
      background-color: var(--color-success-2);
      border-color: var(--color-success-5);
      color: var(--color-success);
    }
  }
  &--error{
    background: var(--color-error);
    border-color: var(--color-error);
    &.is-plain{
      background-color: var(--color-error-2);
      border-color: var(--color-error-5);
      color: var(--color-error);
    }
  }
  &--warning{
    background: var(--color-warning);
    border-color: var(--color-warning);
    &.is-plain{
      background-color: var(--color-warning-2);
      border-color: var(--color-warning-5);
      color: var(--color-warning);
    }
  }
  &--small{
    padding: 8px 16px;
    font-size: 12px;
  }
  &--mini{
  padding: 6px 14px;
  font-size: 12px;
  }
  &--disabled{
    cursor: not-allowed;
    opacity: 0.7;
  }
}
</style>
