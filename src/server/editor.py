import yaml
import sys

def updateCode(new_code):
    print('Hello from Python')
    config_file = "/etc/homeassistant/config/configuration.yaml"
    with open(config_file) as f:
        doc = yaml.safe_load(f)

    print(type(doc))
    print(doc)
    print('\n\n')

    # Load property to be edited and change value
    doc['alarm_control_panel'][0]['code'] = new_code

    print(doc.get('alarm_control_panel'))
    
    with open(config_file, 'w') as f:
        yaml.safe_dump(doc, f)

func_arg = {"updateCode": updateCode};



if __name__ == "__main__":
    func_arg[sys.argv[1]](sys.argv[2])
