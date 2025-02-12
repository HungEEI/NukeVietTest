<?php

/**
 * NukeViet Content Management System
 * @version 4.x
 * @author VINADES.,JSC <contact@vinades.vn>
 * @copyright (C) 2009-2021 VINADES.,JSC. All rights reserved
 * @license GNU/GPL version 2 or any later version
 * @see https://github.com/nukeviet The NukeViet CMS GitHub project
 */

if (!defined('NV_MAINFILE')) {
    exit('Stop!!!');
}

if (!nv_function_exists('nv_block_welcome')) {
    /**
     * nv_company_info_config()
     *
     * @param string $module
     * @param array  $data_block
     * @param array  $lang_block
     * @return string
     */
    function nv_welcome_config($module, $data_block, $lang_block)
    {
        global $lang_global, $selectthemes;

        $html = '<div class="form-group">';
        $html .= '<label class="control-label col-sm-6">Title:</label>';
        $html .= '<div class="col-sm-18"><input type="text" class="form-control" name="config_title_lang" value="' . $data_block['title'] . '"></div>';
        $html .= '</div>';

        return $html;
    }

    /**
     * nv_company_info_submit()
     *
     * @return array
     */
    function nv_welcome_submit()
    {
        global $nv_Request;

        $return = [];
        $return['error'] = [];
        $return['config']['config_title_lang'] = $nv_Request->get_title('config_title_lang', 'post');

    }
}

function nv_block_welcome($block_config)
{
        global $global_config, $lang_global, $language_array;

        if (file_exists(NV_ROOTDIR . '/themes/' . $global_config['module_theme'] . '/blocks/global.welcome.tpl')) {
            $block_theme = $global_config['module_theme'];
        } elseif (file_exists(NV_ROOTDIR . '/themes/' . $global_config['site_theme'] . '/blocks/global.welcome.tpl')) {
            $block_theme = $global_config['site_theme'];
        } else {
            $block_theme = 'default';
        }

        $xtpl = new XTemplate('global.welcome.tpl', NV_ROOTDIR . '/themes/' . $block_theme . '/blocks');
        $xtpl->assign('NV_BASE_SITEURL', NV_BASE_SITEURL);
        $xtpl->assign('BLOCK_THEME', $block_theme);
        $xtpl->assign('SELECT_LANGUAGE', $lang_global['langsite']);
        $xtpl->assign('BLOCK_CONFIG', $block_config);

        $xtpl->parse('main');

        return $xtpl->text('main');
}

if (defined('NV_SYSTEM')) {
    $content = nv_block_welcome($block_config);
}
