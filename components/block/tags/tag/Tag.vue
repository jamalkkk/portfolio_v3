<style lang="scss" src="./tag.scss"></style>

<template>
    <cta
        :class="['b-tag', {
            'is-selected': isSelected,
        }]"
        :is-button="true"
        :has-hover="false"
        :has-underline="false"
        :text="`#${tagName}`"
        :on-click="onClick"
    />
</template>

<script>

export default {
    name: 'Tag',
    props: {
        isSelected: { 
            type: Boolean, 
            default: false,
        },
        tagName: { 
            tyape: String, 
            default: '',
        },
        onClick: { 
            type: Function, 
            default () {
                return null;
            }
        },
    },
    data () {
        return {}
    },
}
</script>