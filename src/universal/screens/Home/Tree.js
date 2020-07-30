import React, {useEffect, useState} from 'react';
// import '../../../../src/App.css'
import './styles.css'
import RenderTree from './helper'
import Parser from 'html-react-parser';

const bstFromPreorder = (preorder, start = 0, end = preorder.length - 1) => {
    if (end - start < 0) return null;
    const val = preorder[start];
    const node = {val, left: null, right: null};
    if (end - start === 0) return node;

    let split = start + 1;
    while (split <= end) {
        if (preorder[split] > val) {
            break;
        }
        ++split;
    }

    node.left = bstFromPreorder(preorder, start + 1, split - 1);
    node.right = bstFromPreorder(preorder, split, end);
    return node;
};


const balanceIt = (root, setIsBalanced, setBalancedTree) => {
    console.log(root)
    const vals = [];
    const dfs = n => {
        if (!n) return;
        dfs(n.left);
        vals.push(n.val);
        dfs(n.right);
    };

    const build = (left, right) => {
        if (left > right) return null;
        const mid = Math.floor((right + left) / 2);
        let val = vals[mid]
        const node = {val, left: null, right: null};
        // const node = new TreeNode(vals[mid]);
        node.left = build(left, mid - 1);
        node.right = build(mid + 1, right);
        return node;
    };
    dfs(root);
    console.log(vals)

    setIsBalanced(true)
    setBalancedTree(build(0, vals.length - 1));
}

const Tree = (props) => {
    const [isBalanced, setIsBalanced] = useState(false)
    const [balancedTree, setBalancedTree] = useState({})
    const unBalanced = bstFromPreorder(props.tree)
    return (
        <div className="tree">
            <RenderTree node={isBalanced?balancedTree:unBalanced}/>
            <button
                type="submit"
                className="btn btn-primary balanceButton "
                onClick={() => balanceIt(unBalanced, setIsBalanced, setBalancedTree)
                }
            >
                Balance it !
            </button>
        </div>

    )

}

export default Tree;
