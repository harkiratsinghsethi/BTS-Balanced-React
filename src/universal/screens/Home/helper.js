import React from 'react';
import './styles.css'

const createListItem = (treeNode) => {
    if (!treeNode) {
        return;
    }

    let item, subTree;
    item = <li>{treeNode.val}</li>
    // item = document.createElement('li');
    // item.textContent = treeNode.val;

    subTree = createSubTreeForNode(treeNode);
    if (subTree) {
        item = <li>{treeNode.val} {subTree}</li>
        // item.appendChild(subTree);
    }

    return item;
};

const createSubTreeForNode = (treeNode) => {
    if (!treeNode.left && !treeNode.right) {
        return;
    }

    let list, item;
    let left,right;

    // list = document.createElement('ul');

    item = createListItem(treeNode.left);
    if (item) {
        left =item
        // list.appendChild(item);
    }

    item = createListItem(treeNode.right);
    if (item) {
        right =item;
    }
    list =<ul> {left}{right}</ul>

    return list;
};


const RenderTree = (props) => {
    // parentElement = parentElement || document.getElementById("app");

    let rootList;
    let item;
    // rootList =`<ul></ul>`
    // rootList = document.createElement('ul');
    item = createListItem(props.node);
    if (item) {

        rootList =<ul>{item}</ul>
    }
    // rootList =<ul>{item}</ul>
    console.log(rootList)
    return (rootList)
    // return rootList.outerHTML

    // parentElement.appendChild(rootList);
};

export default RenderTree;
