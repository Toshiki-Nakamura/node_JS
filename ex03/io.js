/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   io.js                                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tnakamur <tnakamur@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 20:23:35 by tnakamur          #+#    #+#             */
/*   Updated: 2020/12/23 22:19:22 by tnakamur         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');
const { argv } = require('process');

function read_file(arg)
{
	var buff = fs.readFileSync(arg, 'utf-8');
	return buff.toString();
}

var string = read_file(process.argv[2]);

var cnt = 0;
var i = 0;
while (string[i])
{
	if (string[i] == '\n')
		cnt++;
	i++;
}
console.log(cnt);
